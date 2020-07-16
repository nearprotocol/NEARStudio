export class Deal {
  amount: string;
  participants: string[];
  approved: bool[];
  deposited: bool[];
  confirmed: bool[];
}

export class TransferCompleteArgs {
  sender: string;
  dealId: string;
}

export class BalanceOfArgs {
  tokenOwner: string;
}

export class TransferArgs {
  to: string;
  tokens: string;
}

export class AllowanceArgs {
  tokenOwner: string;
  spender: string;
}

export class ApproveArgs {
  spender: string;
  tokens: string;
}

export class TransferFromArgs {
  from: string;
  to: string;
  tokens: string;
}

export class EmptyArgs {
}