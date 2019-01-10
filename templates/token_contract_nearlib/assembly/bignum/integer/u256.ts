import { i128 } from './i128';
import { u128 } from './u128';

export class u256 {

  @inline static get Zero(): u256 { return new u256(); }
  @inline static get One():  u256 { return new u256(1); }
  @inline static get Min():  u256 { return new u256(); }
  @inline static get Max():  u256 { return new u256(u64.MAX_VALUE, u64.MAX_VALUE, u64.MAX_VALUE, u64.MAX_VALUE); }

  @inline
  static fromU256(value: u256): u256 {
    return new u256(value.lo1, value.lo2, value.hi1, value.hi2);
  }

  @inline
  static fromU128(value: u128): u256 {
    return new u256(value.lo, value.hi);
  }

  @inline
  static fromU64(value: u64): u256 {
    return new u256(value);
  }

  @inline
  static fromI64(value: i64): u256 {
    var mask = value >> 63;
    return new u256(value, mask, mask, mask);
  }

  @inline
  static fromU32(value: u32): u256 {
    return new u256(value);
  }

  @inline
  static fromI32(value: i32): u256 {
    var mask: u64 = value >> 63;
    return new u256(value, mask, mask, mask);
  }

  @inline
  static fromBits(
    l0: u32, l1: u32, l2: u32, l3: u32,
    h0: u32, h1: u32, h2: u32, h3: u32,
  ): u256 {
    return new u256(
      <u64>l0 | ((<u64>l1) << 32),
      <u64>l2 | ((<u64>l3) << 32),
      <u64>h0 | ((<u64>h1) << 32),
      <u64>h2 | ((<u64>h3) << 32),
    );
  }

  @inline
  static fromBytes(array: u8[]): u256 {
    // TODO
    unreachable();
    return u256.Zero;
  }

  // TODO need improvement
  // max safe uint for f64 actually 52-bits
  @inline
  static fromF64(value: f64): u256 {
    return new u256(<u64>value);
  }

  // TODO need improvement
  // max safe int for f32 actually 23-bits
  @inline
  static fromF32(value: f32): u256 {
    return new u256(<u64>value);
  }

  // TODO
  // static fromString(str: string): u256

  constructor(
    public lo1: u64 = 0,
    public lo2: u64 = 0,
    public hi1: u64 = 0,
    public hi2: u64 = 0,
  ) {}

  @inline
  set(value: u256): this {
    this.lo1 = value.lo1;
    this.lo2 = value.lo2;
    this.hi1 = value.hi1;
    this.hi2 = value.hi2;
    return this;
  }

  @inline
  setU128(value: u128): this {
    this.lo1 = value.lo;
    this.lo2 = value.hi;
    this.hi1 = 0;
    this.hi2 = 0;
    return this;
  }

  @inline
  setI64(value: i64): this {
    var mask: u64 = value >> 63;
    this.lo1 = value;
    this.lo2 = mask;
    this.hi1 = mask;
    this.hi2 = mask;
    return this;
  }

  @inline
  setU64(value: u64): this {
    this.lo1 = value;
    this.lo2 = 0;
    this.hi1 = 0;
    this.hi2 = 0;
    return this;
  }

  @inline
  setI32(value: i32): this {
    var mask: u64 = value >> 63;
    this.lo1 = value;
    this.lo2 = mask;
    this.hi1 = mask;
    this.hi2 = mask;
    return this;
  }

  @inline
  setU32(value: u32): this {
    this.lo1 = value;
    this.lo2 = 0;
    this.hi1 = 0;
    this.hi2 = 0;
    return this;
  }

  @inline
  isZero(): bool {
    return !(this.lo1 | this.lo2 | this.hi1 | this.hi2);
  }

  @inline @operator.prefix('!')
  static isEmpty(value: u256): bool {
    return value === null || !value.isZero();
  }

  @inline @operator.prefix('~')
  not(): u256 {
    return new u256(~this.lo1, ~this.lo2, ~this.hi1, ~this.hi2);
  }

  @inline @operator.prefix('+')
  pos(): u256 {
    return this;
  }

  @inline @operator.prefix('-')
  neg(): u256 {
    var lo1 = ~this.lo1,
        lo2 = ~this.lo2,
        hi1 = ~this.hi1,
        hi2 = ~this.hi2;

    var cy  = ((lo1 & 1) + (lo1 >> 1)) >> 63;
    var cy1 = ((lo2 & 1) + (lo2 >> 1)) >> 63;
    var cy2 = ((hi1 & 1) + (hi1 >> 1)) >> 63;

    return new u256(lo1 + 1, lo2 + cy, hi1 + cy1, hi2 + cy2);
  }

  @inline @operator('+')
  static add(a: u256, b: u256): u256 {
    var alo  = a.lo1;
    var blo  = b.lo1;
    var lo   = new u128(alo) + new u128(blo);
    var amid = new u128(alo, a.hi1);
    var bmid = new u128(blo, b.hi1);
    var mid  = amid + bmid + new u128(lo.hi);
    var hi   = a.hi2 + b.hi2 + mid.hi;

    return new u256(lo.lo, mid.lo, mid.hi, hi);
  }

  @inline @operator('|')
  static or(a: u256, b: u256): u256 {
    return new u256(a.lo1 | b.lo1, a.lo2 | b.lo2, a.hi1 | b.hi1, a.hi2 | b.hi2);
  }

  @inline @operator('^')
  static xor(a: u256, b: u256): u256 {
    return new u256(a.lo1 ^ b.lo1, a.lo2 ^ b.lo2, a.hi1 ^ b.hi1, a.hi2 ^ b.hi2);
  }

  @inline @operator('&')
  static and(a: u256, b: u256): u256 {
    return new u256(a.lo1 & b.lo1, a.lo2 & b.lo2, a.hi1 & b.hi1, a.hi2 & b.hi2);
  }

  @inline
  static popcnt(value: u256): i32 {
    var count             = popcnt(value.lo1);
    if (value.lo2) count += popcnt(value.lo2);
    if (value.hi1) count += popcnt(value.hi1);
    if (value.hi2) count += popcnt(value.hi2);
    return <i32>count;
  }

  @inline
  static clz(value: u256): i32 {
         if (value.hi2) return <i32>(clz(value.hi2) + 0);
    else if (value.hi1) return <i32>(clz(value.hi1) + 64);
    else if (value.lo2) return <i32>(clz(value.lo2) + 128);
    else                return <i32>(clz(value.lo1) + 192);
  }

  @inline
  static ctz(value: u256): i32 {
         if (value.lo1) return <i32>(ctz(value.lo1) + 0);
    else if (value.lo2) return <i32>(ctz(value.lo2) + 64);
    else if (value.hi1) return <i32>(ctz(value.hi1) + 128);
    else                return <i32>(ctz(value.hi2) + 192);
  }

  /**
  * Convert to 128-bit signed integer
  * @return 256-bit signed integer
  */
  @inline
  toI128(): i128 {
    return new i128(
       this.lo1,
      (this.lo2 & 0x7FFFFFFFFFFFFFFF) |
      (this.hi2 & 0x8000000000000000)
    );
  }

  /**
  * Convert to 128-bit unsigned integer
  * @return 128-bit unsigned integer
  */
  @inline
  toU128(): u128 {
    return new u128(this.lo1, this.lo2);
  }

  /**
  * Convert to 64-bit signed integer
  * @return 64-bit signed integer
  */
  @inline
  toI64(): i64 {
    return <i64>(
      (this.lo1 & 0x7FFFFFFFFFFFFFFF) |
      (this.hi2 & 0x8000000000000000)
    );
  }

  /**
  * Convert to 64-bit unsigned integer
  * @return 64-bit unsigned integer
  */
  @inline
  toU64(): u64 {
    return this.lo1;
  }

  /**
  * Convert to 32-bit signed integer
  * @return 32-bit signed integer
  */
  @inline
  toI32(): i32 {
    return <i32>this.toI64();
  }

  /**
  * Convert to 32-bit unsigned integer
  * @return 32-bit unsigned integer
  */
  @inline
  toU32(): u32 {
    return <u32>this.lo1;
  }

  /**
  * Convert to 1-bit boolean
  * @return 1-bit boolean
  */
  @inline
  toBool(): bool {
    return <bool>(this.lo1 | this.lo2 | this.hi1 | this.hi2);
  }

  @inline
  toBytes(le: bool = true): u8[] {
    return le ? this.toBytesLE() : this.toBytesBE();
  }

  toBytesLE(): u8[] {
    var hi1 = this.hi1, lo1 = this.lo1;
    var hi2 = this.hi2, lo2 = this.lo2;

    var result: u8[] = [
      <u8>(lo1 >>  0), <u8>(lo1 >>  8), <u8>(lo1 >> 16), <u8>(lo1 >> 24),
      <u8>(lo1 >> 32), <u8>(lo1 >> 40), <u8>(lo1 >> 48), <u8>(lo1 >> 56),

      <u8>(lo2 >>  0), <u8>(lo2 >>  8), <u8>(lo2 >> 16), <u8>(lo2 >> 24),
      <u8>(lo2 >> 32), <u8>(lo2 >> 40), <u8>(lo2 >> 48), <u8>(lo2 >> 56),

      <u8>(hi1 >>  0), <u8>(hi1 >>  8), <u8>(hi1 >> 16), <u8>(hi1 >> 24),
      <u8>(hi1 >> 32), <u8>(hi1 >> 40), <u8>(hi1 >> 48), <u8>(hi1 >> 56),

      <u8>(hi2 >>  0), <u8>(hi2 >>  8), <u8>(hi2 >> 16), <u8>(hi2 >> 24),
      <u8>(hi2 >> 32), <u8>(hi2 >> 40), <u8>(hi2 >> 48), <u8>(hi2 >> 56),
    ];

    return result;
  }

  toBytesBE(): u8[] {
    var hi1 = this.hi1, lo1 = this.lo1;
    var hi2 = this.hi2, lo2 = this.lo2;

    var result: u8[] = [
      <u8>(hi2 >> 56), <u8>(hi2 >> 48), <u8>(hi2 >> 40), <u8>(hi2 >> 32),
      <u8>(hi2 >> 24), <u8>(hi2 >> 16), <u8>(hi2 >>  8), <u8>(hi2 >>  0),

      <u8>(hi1 >> 56), <u8>(hi1 >> 48), <u8>(hi1 >> 40), <u8>(hi1 >> 32),
      <u8>(hi1 >> 24), <u8>(hi1 >> 16), <u8>(hi1 >>  8), <u8>(hi1 >>  0),

      <u8>(lo2 >> 56), <u8>(lo2 >> 48), <u8>(lo2 >> 40), <u8>(lo2 >> 32),
      <u8>(lo2 >> 24), <u8>(lo2 >> 16), <u8>(lo2 >>  8), <u8>(lo2 >>  0),

      <u8>(lo1 >> 56), <u8>(lo1 >> 48), <u8>(lo1 >> 40), <u8>(lo1 >> 32),
      <u8>(lo1 >> 24), <u8>(lo1 >> 16), <u8>(lo1 >>  8), <u8>(lo1 >>  0),
    ];

    return result;
  }

  @inline
  clone(): u256 {
    return new u256(this.lo1, this.lo2, this.hi1, this.hi2);
  }

  // TODO
  // toString(radix: i32): string
}
