import "allocator/arena";
import { contractContext, globalStorage, near, ContractPromise } from "./near";
import { BalanceOfArgs, TransferArgs, AllowanceArgs, ApproveArgs, TransferFromArgs, EmptyArgs } from "./model.near";

export class Token {
  contract: string;
  
  constructor(contract: string) {
    this.contract = contract;
  }

  totalSupply(): ContractPromise {
    let args: EmptyArgs = {};
    return ContractPromise.create(this.contract, "totalSupply", args.encode(), 1);
  }

  balanceOf(tokenOwner: string): ContractPromise {
    let args: BalanceOfArgs = { tokenOwner };
    return ContractPromise.create(this.contract, "balanceOf", args.encode(), 1);
  }

  allowance(tokenOwner: string, spender: string): ContractPromise {
    let args: AllowanceArgs = { tokenOwner, spender };
    return ContractPromise.create(this.contract, "allowance", args.encode(), 1);
  }

  transfer(to: string, tokens: string): ContractPromise {
    let args: TransferArgs = { to, tokens };
    return ContractPromise.create(this.contract, "transfer", args.encode(), 1);
  }

  approve(spender: string, tokens: string): boolean {
    let args: ApproveArgs = { spender, tokens };
    return ContractPromise.create(this.contract, "approve", args.encode(), 1);
  }

  transferFrom(from: string, to: string, tokens: string): ContractPromise {
    let args: TransferFromArgs = { from, to, tokens };
    return ContractPromise.create(this.contract, "transferFrom", args.encode(), 1);
  }
}