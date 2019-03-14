import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near, ContractPromise } from "./near";
import { Deal, TransferCompleteArgs } from "./model.near";
import { Token } from "./token";

// --- contract code goes below 

// TODO: Replace contract address with actual DAI bridge or any other token
let token = new Token("studio-31fz6jnjv");

// TODO: Replace with name of current contract
let CONTRACT_NAME = "studio-853u597r1";

export function getDeal(dealId: string): Deal {
  let dealKey = "deal:" + dealId;
  return Deal.decode(globalStorage.getBytes(dealKey));
}

export function makeDeal(dealId: string, amount: string, participants: string[]): void {
  near.log("makeDeal: " + dealId + " amount: " + amount + " participants: " + participants.toString());

  let dealKey = "deal:" + dealId;
  let existingDeal = globalStorage.getBytes(dealKey);
  assert(!existingDeal, "Deal " + dealId + " already exists");

  let everythingFalse: bool[] = new Array(participants.length);
  let deal: Deal = { amount, participants, approved: everythingFalse, deposited: everythingFalse, confirmed: everythingFalse };
  globalStorage.setBytes(dealKey, deal.encode()); 
}

export function fundDeal(dealId: string): void {
  near.log("fundDeal: " + dealId);

  let dealKey = "deal:" + dealId;
  let deal = Deal.decode(globalStorage.getBytes(dealKey));
  let senderIndex = deal.participants.indexOf(contractContext.sender);

  assert(senderIndex != -1, contractContext.sender + " is not part of the deal");
  assert(!deal.approved[senderIndex], contractContext.sender + " already funding the deal");

  deal.approved[senderIndex] = true;
  globalStorage.setBytes(dealKey, deal.encode()); 

  let args: TransferCompleteArgs = { dealId, sender: contractContext.sender };
  token.transferFrom(contractContext.sender, CONTRACT_NAME, deal.amount).then("transferComplete", args.encode(), 1).returnAsResult();
}

export function transferComplete(dealId: string, sender: string): void {
  near.log("transferComplete: " + dealId + " sender: " + sender);

  let transferResults = ContractPromise.getResults();
  assert(transferResults.length == 1, "Expect only one result from transfer call");
  
  let dealKey = "deal:" + dealId;
  let deal = Deal.decode(globalStorage.getBytes(dealKey));
  let senderIndex = deal.participants.indexOf(sender);
  assert(senderIndex != -1, sender + " is not part of the deal");

  if (transferResults[0].success) {
    deal.deposited[senderIndex] = true;
  } else {
    deal.approved[senderIndex] = false;
  }

  globalStorage.setBytes(dealKey, deal.encode());
}

export function cancelDeal(dealId: string): void {
  // TODO: Allow to get out of deal if not everybody funded yet
}

export function confirmDeal(dealId: string): void {
  let dealKey = "deal:" + dealId;
  let deal = Deal.decode(globalStorage.getBytes(dealKey));
  let senderIndex = deal.participants.indexOf(contractContext.sender);
  assert(senderIndex != -1, contractContext.sender + " is not part of the deal");
  assert(deal.confirmed[senderIndex] == false, contractContext.sender + " already confirmed the deal")

  deal.confirmed[senderIndex] = true;
  globalStorage.setBytes(dealKey, deal.encode());

  let allConfirmed = deal.confirmed.every((confirmed: bool, index: i32, arr: Array<bool>): bool => confirmed);
  if (allConfirmed) {
    // TODO: Robust implementation should also track who actually got paid out
    for (let i = 0; i < deal.participants.length; i++) {
      let participant = deal.participants[i];
      token.transfer(participant, deal.amount);
    }
  }
}