
import { u128 } from './u128';
import { i256 } from './i256';
import { u256 } from './u256';

import {
  __clz128,
  __ctz128,
  __floatuntidf,

  __udivmod128,
  __divmod_quot_lo,
  __divmod_quot_hi,
  __divmod_rem,

} from '../globals';

import { atou128 } from '../utils';

export class i128 {

  static readonly Zero: i128 = new i128()
  static readonly One:  i128 = new i128(1)
  static readonly Min:  i128 = new i128(0, 0x8000000000000000)
  static readonly Max:  i128 = new i128(u64.MAX_VALUE, 0x7FFFFFFFFFFFFFFF)

  @inline
  static fromString(value: string, radix: i32 = 0): i128 {
    return this.fromU128(atou128(value, radix));
  }

  @inline
  static fromI256(value: i256): i128 {
    return new i128(value.lo1, value.lo2);
  }

  @inline
  static fromU256(value: u256): i128 {
    return new i128(value.lo1, <i64>value.lo2);
  }

  @inline
  static fromI128(value: i128): i128 {
    return new i128(value.lo, value.hi);
  }

  @inline
  static fromU128(value: u128): i128 {
    return new i128(value.lo, <i64>value.hi);
  }

  @inline
  static fromI64(value: i64): i128 {
    return new i128(<u64>value, value >> 63);
  }

  @inline
  static fromU64(value: u64): i128 {
    return new i128(value);
  }

  // TODO need improvement
  // max safe uint for f64 actually 53-bits
  @inline
  static fromF64(value: f64): i128 {
    return new u128(<u64>value, -(<u64>(value < 0)));
  }

  // TODO need improvement
  // max safe int for f32 actually 23-bits
  @inline
  static fromF32(value: f32): i128 {
    return new i128(<u64>value, -(<i64>(value < 0)));
  }

  @inline
  static fromI32(value: i32): i128 {
    return new i128(<u64>value, <i64>value >> 63);
  }

  @inline
  static fromU32(value: u32): i128 {
    return new i128(<u64>value);
  }

  @inline
  static fromBits(lo1: i32, lo2: i32, hi1: i32, hi2: i32): i128 {
    return new i128(
      <u64>lo1 | ((<u64>lo2) << 32),
      <i64>hi1 | ((<i64>hi2) << 32),
    );
  }

  @inline
  static fromBytes(array: u8[], le: bool = true): i128 {
    return le ? i128.fromBytesLE(array) : u128.fromBytesBE(array);
  }

  static fromBytesLE(array: u8[]): i128 {
    assert(array.length == 16);

    var lo: u64 = 0, hi: i64 = 0;
    for (let i = 0; i <  8; ++i) lo |= unchecked(array[i]) << (i << 3);
    for (let i = 8; i < 16; ++i) hi |= unchecked(array[i]) << (i << 3);

    return new i128(lo, hi);
  }

  static fromBytesBE(array: u8[]): i128 {
    assert(array.length == 16);

    var lo: u64 = 0, hi: i64 = 0;
    for (let i = 0; i <  8; ++i) hi |= unchecked(array[i]) << ((7  - i) << 3);
    for (let i = 8; i < 16; ++i) lo |= unchecked(array[i]) << ((15 - i) << 3);

    return new i128(lo, hi);
  }

  /**
   * Create 128-bit signed integer from generic type T
   * @param  value
   * @return 128-bit signed integer
   */
  @inline
  static from<T>(value: T): i128 {
         if (value instanceof bool) { return i128.fromU64(<u64>value); }
    else if (value instanceof i8)   { return i128.fromI64(<i64>value); }
    else if (value instanceof u8)   { return i128.fromU64(<u64>value); }
    else if (value instanceof i16)  { return i128.fromI64(<i64>value); }
    else if (value instanceof u16)  { return i128.fromU64(<u64>value); }
    else if (value instanceof i32)  { return i128.fromI64(<i64>value); }
    else if (value instanceof u32)  { return i128.fromU64(<u64>value); }
    else if (value instanceof i64)  { return i128.fromI64(<i64>value); }
    else if (value instanceof u64)  { return i128.fromU64(<u64>value); }
    else if (value instanceof f32)  { return i128.fromF64(<f64>value); }
    else if (value instanceof f64)  { return i128.fromF64(<f64>value); }
    else if (value instanceof i128) { return i128.fromI128(<i128>value); }
    else if (value instanceof u128) { return i128.fromU128(<u128>value); }
    else if (value instanceof i256) { return i128.fromI256(<i256>value); }
    else if (value instanceof u256) { return i128.fromU256(<u256>value); }
    else if (value instanceof u8[]) { return i128.fromBytes(<u8[]>value); }
    else { throw new TypeError("Unsupported generic type"); }
  }

  constructor(
    public lo: u64 = 0,
    public hi: i64 = 0,
  ) {}

  @inline
  isNeg(): bool {
    return <bool>(this.hi >>> 63);
  }

  @inline
  isZero(): bool {
    return !(this.lo | this.hi);
  }

  @inline @operator.prefix('~')
  not(): i128 {
    return new i128(~this.lo, ~this.hi);
  }

  @inline @operator.prefix('+')
  pos(): i128 {
    return this;
  }

  @inline @operator.prefix('-')
  neg(): i128 {
    var lo = ~this.lo, hi = ~this.hi;
    var cy = ((lo & 1) + (lo >> 1)) >> 63;
    return new i128(lo + 1, hi + cy);
  }

  @inline @operator.prefix('!')
  static isEmpty(value: i128): bool {
    return value === null || !value.isZero();
  }

  @inline @operator('|')
  static or(a: i128, b: i128): i128 {
    return new i128(a.lo | b.lo, a.hi | b.hi);
  }

  @inline @operator('^')
  static xor(a: i128, b: u128): i128 {
    return new i128(a.lo ^ b.lo, a.hi ^ b.hi);
  }

  @inline @operator('&')
  static and(a: i128, b: i128): i128 {
    return new i128(a.lo & b.lo, a.hi & b.hi);
  }

  @inline @operator('<<')
  static shl(value: i128, shift: i32): i128 {
    shift &= 127;

    // need for preventing redundant i32 -> u64 extends
    var shift64: i64 = shift;

    var mod1: i64 = ((((shift64 + 127) | shift64) & 64) >>> 6) - 1;
    var mod2: i64 = (shift64 >>> 6) - 1;

    shift64 &= 63;

    var vl = value.lo;
    var lo = vl << shift64;
    var hi = lo & ~mod2;

    hi |= ((value.hi << shift64) | ((vl >>> (64 - shift64)) & mod1)) & mod2;

    return new i128(lo & mod2, hi);
  }

  @inline @operator('>>>')
  static shr_u(value: i128, shift: i32): i128 {
    shift &= 127;

    // need for preventing redundant i32 -> u64 extends
    var shift64: i64 = shift;

    var mod1: i64 = ((((shift64 + 127) | shift64) & 64) >>> 6) - 1;
    var mod2: i64 = (shift64 >>> 6) - 1;

    shift64 &= 63;

    var vh = value.hi;
    var hi = vh >>> shift64;
    var lo = hi & ~mod2;

    lo |= ((value.lo >>> shift64) | ((vh << (64 - shift64)) & mod1)) & mod2;

    return new i128(lo, hi & mod2);
  }

  @inline @operator('+')
  static add(a: i128, b: i128): i128 {
    var bl = b.lo;
    // var lo = a.lo + bl   - (<i64>(b  <  0));
    var lo = a.lo + bl   - (b.hi >>> 63);
    var hi = a.hi + b.hi + (<i64>(lo < bl));

    return new i128(lo, hi);
  }

  @inline @operator('-')
  static sub(a: i128, b: i128): i128 {
    var al = a.lo;
    // var lo = al   - b.lo + (<i64>(b  <  0));
    var lo = al   - b.lo + (b.hi >>> 63);
    var hi = a.hi - b.hi - (<i64>(lo > al));

    return new i128(lo, hi);
  }

  @inline @operator('==')
  static eq(a: i128, b: i128): bool {
    return a.hi == b.hi && a.lo == b.lo;
  }

  @inline @operator('!=')
  static ne(a: i128, b: i128): bool {
    return !u128.eq(a, b);
  }

  @inline @operator('<')
  static lt(a: i128, b: i128): bool {
    var ah = a.hi, bh = b.hi;
    return ah == bh ? a.lo < b.lo : ah < bh;
  }

  @inline @operator('>')
  static gt(a: i128, b: i128): bool {
    var ah = a.hi, bh = b.hi;
    return ah == bh ? a.lo > b.lo : ah > bh;
  }

  @inline @operator('<=')
  static le(a: i128, b: i128): bool {
    return !i128.gt(a, b);
  }

  @inline @operator('>=')
  static ge(a: i128, b: i128): bool {
    return !i128.lt(a, b);
  }

  @inline
  static cmp(a: i128, b: i128): i32 {
    var dlo = (a.lo - b.lo) as i64;
    var dhi = a.hi - b.hi;
    // return <i32>(dhi != 0 ? dhi : dlo);
    return <i32>select<i64>(dhi, dlo, dhi != 0);
  }

  @inline
  static popcnt(value: i128): i32 {
    return <i32>(popcnt(value.lo) + popcnt(value.hi));
  }

  @inline
  static clz(value: i128): i32 {
    return __clz128(value.lo, value.hi);
  }

  @inline
  static ctz(value: i128): i32 {
    return __ctz128(value.lo, value.hi);
  }

  @inline
  static abs(value: i128): i128 {
    return value.isNeg() ? value.neg() : value;
    // var mask = value >> 127;
    // return (value ^ mask) - mask;
  }

  // TODO
}
