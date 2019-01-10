import { u256 } from './u256';

export class i256 {

  static readonly Zero: i256 = new i256()
  static readonly One:  i256 = new i256(1)
  static readonly Min:  i256 = new i256(0, 0, 0, 0x8000000000000000)
  static readonly Max:  i256 = new i256(u64.MAX_VALUE, u64.MAX_VALUE, u64.MAX_VALUE, 0x7FFFFFFFFFFFFFFF)

  constructor(
    public lo1: i64 = 0,
    public lo2: i64 = 0,
    public hi1: i64 = 0,
    public hi2: i64 = 0,
  ) {}

  @inline
  isNeg(): bool {
    return <bool>(this.hi2 >>> 63);
  }

  @inline
  isZero(): bool {
    return !(this.lo1 | this.lo2 | this.hi1 | this.hi2);
  }

  @inline @operator.prefix('!')
  static isEmpty(value: i256): bool {
    return value === null || !value.isZero();
  }

  /*
  @inline
  static abs(value: i128): i128 {
    return value < 0 ? value.neg() : value;
  }
  */

  // TODO
}
