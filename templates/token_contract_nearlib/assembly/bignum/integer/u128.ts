import { i128 } from './i128';
import { i256 } from './i256';
import { u256 } from './u256';

// TODO import this on top level 'index.ts'
import {
  __clz128,
  __ctz128,
  __floatuntidf,

  __multi3,
  __res128_lo,
  __res128_hi,

  __udivmod128,
  __udivmod128_10,

  __divmod_quot_lo,
  __divmod_quot_hi,
  __divmod_rem,

} from '../globals';
import { utoa10, atou128 } from '../utils';

// @external("u128.spec.as", "logStr")
// declare function logStr(str: string): void;

// @external("u128.spec.as", "logF64")
// declare function logF64(v: f64): void;

/*
@external("u128.spec.as", "logU128Packed")
declare function logU128Packed(msg: string | null, lo: f64, hi: f64): void;

function logU128(value: u128, msg: string | null = null): void {
  assert(value);
  logU128Packed(msg,
    reinterpret<f64>(value.lo),
    reinterpret<f64>(value.hi)
  );
}
*/

const HEX_CHARS = '0123456789abcdef';

export class u128 {

  @inline static get Zero(): u128 { return new u128(); }
  @inline static get One():  u128 { return new u128(1); }
  @inline static get Min():  u128 { return new u128(); }
  @inline static get Max():  u128 { return new u128(-1, -1); }

  @inline
  static fromString(value: string, radix: i32 = 0): u128 {
    return atou128(value, radix);
  }

  @inline
  static fromI256(value: i256): u128 {
    return new u128(value.lo1, value.lo2);
  }

  @inline
  static fromU256(value: u256): u128 {
    return new u128(value.lo1, value.lo2);
  }

  @inline
  static fromI128(value: i128): u128 {
    return new u128(value.lo, value.hi);
  }

  @inline
  static fromU128(value: u128): u128 {
    return new u128(value.lo, value.hi);
  }

  @inline
  static fromI64(value: i64): u128 {
    return new u128(value, value >> 63);
  }

  @inline
  static fromU64(value: u64): u128 {
    return new u128(value);
  }

  // TODO need improvement
  // max safe uint for f64 actually 53-bits
  @inline
  static fromF64(value: f64): u128 {
    return new u128(<u64>value, -(value < 0));
  }

  // TODO need improvement
  // max safe int for f32 actually 23-bits
  @inline
  static fromF32(value: f32): u128 {
    return new u128(<u64>value, -(value < 0));
  }

  @inline
  static fromI32(value: i32): u128 {
    return new u128(value, value >> 63);
  }

  @inline
  static fromU32(value: u32): u128 {
    return new u128(value);
  }

  @inline
  static fromBool(value: bool): u128 {
    return new u128(value);
  }

  @inline
  static fromBits(lo1: u32, lo2: u32, hi1: u32, hi2: u32): u128 {
    return new u128(
      <u64>lo1 | ((<u64>lo2) << 32),
      <u64>hi1 | ((<u64>hi2) << 32),
    );
  }

  @inline
  static fromBytes(array: u8[], bigEndian: bool = false): u128 {
    return bigEndian ? u128.fromBytesBE(array) : u128.fromBytesLE(array);
  }

  static fromBytesLE(array: u8[]): u128 {
    assert(array.length == 16);
    return new u128(
      <u64>unchecked(array[0]) <<  0 |
      <u64>unchecked(array[1]) <<  8 |
      <u64>unchecked(array[2]) << 16 |
      <u64>unchecked(array[3]) << 24 |
      <u64>unchecked(array[4]) << 32 |
      <u64>unchecked(array[5]) << 40 |
      <u64>unchecked(array[6]) << 48 |
      <u64>unchecked(array[7]) << 56,

      <u64>unchecked(array[8])  <<  0 |
      <u64>unchecked(array[9])  <<  8 |
      <u64>unchecked(array[10]) << 16 |
      <u64>unchecked(array[11]) << 24 |
      <u64>unchecked(array[12]) << 32 |
      <u64>unchecked(array[13]) << 40 |
      <u64>unchecked(array[14]) << 48 |
      <u64>unchecked(array[15]) << 56,
    );
  }

  static fromBytesBE(array: u8[]): u128 {
    assert(array.length == 16);
    return new u128(
      <u64>unchecked(array[8])  << 56 |
      <u64>unchecked(array[9])  << 48 |
      <u64>unchecked(array[10]) << 40 |
      <u64>unchecked(array[11]) << 32 |
      <u64>unchecked(array[12]) << 24 |
      <u64>unchecked(array[13]) << 16 |
      <u64>unchecked(array[14]) <<  8 |
      <u64>unchecked(array[15]) <<  0,

      <u64>unchecked(array[0]) << 56 |
      <u64>unchecked(array[1]) << 48 |
      <u64>unchecked(array[2]) << 40 |
      <u64>unchecked(array[3]) << 32 |
      <u64>unchecked(array[4]) << 24 |
      <u64>unchecked(array[5]) << 16 |
      <u64>unchecked(array[6]) <<  8 |
      <u64>unchecked(array[7]) <<  0,
    );
  }

  /**
   * Create 128-bit unsigned integer from generic type T
   * @param  value
   * @returns 128-bit unsigned integer
   */
  @inline
  static from<T>(value: T): u128 {
         if (value instanceof bool)   return u128.fromU64(<u64>value);
    else if (value instanceof i8)     return u128.fromI64(<i64>value);
    else if (value instanceof u8)     return u128.fromU64(<u64>value);
    else if (value instanceof i16)    return u128.fromI64(<i64>value);
    else if (value instanceof u16)    return u128.fromU64(<u64>value);
    else if (value instanceof i32)    return u128.fromI64(<i64>value);
    else if (value instanceof u32)    return u128.fromU64(<u64>value);
    else if (value instanceof i64)    return u128.fromI64(<i64>value);
    else if (value instanceof u64)    return u128.fromU64(<u64>value);
    else if (value instanceof f32)    return u128.fromF64(<f64>value);
    else if (value instanceof f64)    return u128.fromF64(<f64>value);
    else if (value instanceof i128)   return u128.fromI128(<i128>value);
    else if (value instanceof u128)   return u128.fromU128(<u128>value);
    else if (value instanceof i256)   return u128.fromI256(<i256>value);
    else if (value instanceof u256)   return u128.fromU256(<u256>value);
    else if (value instanceof u8[])   return u128.fromBytes(<u8[]>value);
    else if (value instanceof String) return u128.fromString(<string>value);
    else throw new TypeError("Unsupported generic type");
  }

  // TODO
  // static fromString(str: string): u128

  /**
   * Create 128-bit unsigned integer from 64-bit parts
   * @param lo low  64-bit part of 128-bit unsigned integer
   * @param hi high 64-bit part of 128-bit unsigned integer
   */
  constructor(
    public lo: u64 = 0,
    public hi: u64 = 0,
  ) {}

  @inline
  set(value: u128): this {
    this.lo = value.lo;
    this.hi = value.hi;
    return this;
  }

  @inline
  setI64(value: i64): this {
    this.lo = value;
    this.hi = value >> 63;
    return this;
  }

  @inline
  setU64(value: u64): this {
    this.lo = value;
    this.hi = 0;
    return this;
  }

  @inline
  setI32(value: i32): this {
    this.lo = value;
    this.hi = value >> 63;
    return this;
  }

  @inline
  setU32(value: u32): this {
    this.lo = value;
    this.hi = 0;
    return this;
  }

  @inline
  isZero(): bool {
    return !(this.lo | this.hi);
  }

  @inline @operator.prefix('~')
  not(): u128 {
    return new u128(~this.lo, ~this.hi);
  }

  @inline @operator.prefix('+')
  pos(): u128 {
    return this;
  }

  @inline @operator.prefix('-')
  neg(): u128 {
    var lo = ~this.lo, hi = ~this.hi;
    var cy = ((lo & 1) + (lo >> 1)) >> 63;
    return new u128(lo + 1, hi + cy);
  }

  @inline @operator.prefix('++')
  preInc(): this {
    var tmp  = this.lo + 1;
    this.hi += ((this.lo ^ tmp) & this.lo) >> 63;
    this.lo  = tmp;
    return this;
  }

  @inline @operator.prefix('--')
  preDec(): this {
    var tmp  = this.lo - 1;
    this.hi -= ((this.lo ^ tmp) & tmp) >> 63;
    this.lo  = tmp;
    return this;
  }

  @inline @operator.postfix('++')
  postInc(): u128 {
    return this.clone().preInc();
  }

  @inline @operator.postfix('--')
  postDec(): u128 {
    return this.clone().preDec();
  }

  @inline @operator.prefix('!')
  static isEmpty(value: u128): bool {
    return value === null || !(value.lo | value.hi);
  }

  @inline @operator('|')
  static or(a: u128, b: u128): u128 {
    return new u128(a.lo | b.lo, a.hi | b.hi);
  }

  @inline @operator('^')
  static xor(a: u128, b: u128): u128 {
    return new u128(a.lo ^ b.lo, a.hi ^ b.hi);
  }

  @inline @operator('&')
  static and(a: u128, b: u128): u128 {
    return new u128(a.lo & b.lo, a.hi & b.hi);
  }

  @inline @operator('<<')
  static shl(value: u128, shift: i32): u128 {
    shift &= 127;

    // need for preventing redundant i32 -> u64 extends
    var shift64 = shift as u64;

    var mod1 = ((((shift64 + 127) | shift64) & 64) >> 6) - 1;
    var mod2 = (shift64 >> 6) - 1;

    shift64 &= 63;

    var vl = value.lo;
    var lo = vl << shift64;
    var hi = lo & ~mod2;

    hi |= ((value.hi << shift64) | ((vl >> (64 - shift64)) & mod1)) & mod2;

    return new u128(lo & mod2, hi);
  }

  @inline @operator('>>')
  static shr(value: u128, shift: i32): u128 {
    shift &= 127;

    // need for preventing redundant i32 -> u64 extends
    var shift64 = shift as u64;

    var mod1 = ((((shift64 + 127) | shift64) & 64) >> 6) - 1;
    var mod2 = (shift64 >> 6) - 1;

    shift64 &= 63;

    var vh = value.hi;
    var hi = vh >> shift64;
    var lo = hi & ~mod2;

    lo |= ((value.lo >> shift64) | ((vh << (64 - shift64)) & mod1)) & mod2;

    return new u128(lo, hi & mod2);
  }

  @inline @operator('>>>')
  static shr_u(value: u128, shift: i32): u128 {
    return u128.shr(value, shift);
  }

  @inline
  static rotl(value: u128, shift: i32): u128 {
    shift &= 127;
    if (shift == 0) return value;

    var shift64 = (128 - shift) as u64;

    var mod1 = ((((shift64 + 127) | shift64) & 64) >> 6) - 1;
    var mod2 = (shift64 >> 6) - 1;

    shift64 &= 63;

    var vl = value.lo;
    var vh = value.hi;
    var hi1 = vh >> shift64;
    var lo1 = hi1 & ~mod2;

    lo1 |= ((vl >> shift64) | ((vh << (64 - shift64)) & mod1)) & mod2;
    hi1 &= mod2;

    shift64 = shift;

    mod1 = ((((shift64 + 127) | shift64) & 64) >> 6) - 1;
    mod2 = (shift64 >> 6) - 1;

    shift64 &= 63;

    var lo2 = vl << shift64;
    var hi2 = lo2 & ~mod2;

    hi2 |= ((vh << shift64) | ((vl >> (64 - shift64)) & mod1)) & mod2;
    lo2 &= mod2;

    return new u128(lo1 | lo2, hi1 | hi2);
  }

  @inline
  static rotr(value: u128, shift: i32): u128 {
    shift &= 127;
    if (shift == 0) return value;

    var shift64 = (128 - shift) as u64;

    var mod1 = ((((shift64 + 127) | shift64) & 64) >> 6) - 1;
    var mod2 = (shift64 >> 6) - 1;

    shift64 &= 63;

    var vl = value.lo;
    var vh = value.hi;
    var lo1 = vl << shift64;
    var hi1 = lo1 & ~mod2;

    hi1 |= ((vh << shift64) | ((vl >> (64 - shift64)) & mod1)) & mod2;
    lo1 &= mod2;

    shift64 = shift;

    mod1 = ((((shift64 + 127) | shift64) & 64) >> 6) - 1;
    mod2 = (shift64 >> 6) - 1;

    shift64 &= 63;

    var hi2 = vh >> shift64;
    var lo2 = hi2 & ~mod2;

    lo2 |= ((vl >> shift64) | ((vh << (64 - shift64)) & mod1)) & mod2;
    hi2 &= mod2;

    return new u128(lo1 | lo2, hi1 | hi2);
  }

  @inline @operator('+')
  static add(a: u128, b: u128): u128 {
    var bl = b.lo;
    var lo = a.lo + bl;
    var hi = a.hi + b.hi + (<u64>(lo < bl));

    return new u128(lo, hi);
  }

  @inline @operator('-')
  static sub(a: u128, b: u128): u128 {
    var al = a.lo;
    var lo = al   - b.lo;
    var hi = a.hi - b.hi - (<u64>(lo > al));

    return new u128(lo, hi);
  }

  // mul: u128 x u128 = u128
  @inline @operator('*')
  static mul(a: u128, b: u128): u128 {
    __multi3(null, a.lo, a.hi, b.lo, b.hi);
    return new u128(__res128_lo, __res128_hi);
  }

  @inline @operator('/')
  static div(a: u128, b: u128): u128 {
    __udivmod128(a.lo, a.hi, b.lo, b.hi);
    return new u128(__divmod_quot_lo, __divmod_quot_hi);
  }

  @inline @operator('%')
  static rem(a: u128, b: u128): u128 {
    __udivmod128(a.lo, a.hi, b.lo, b.hi);
    return u128.from(__divmod_rem);
  }

  @inline
  static div10(value: u128): u128 {
    __udivmod128_10(null, null, value.lo, value.hi);
    return new u128(__divmod_quot_lo, __divmod_quot_hi);
  }

  @inline
  static rem10(value: u128): u128 {
    __udivmod128_10(null, null, value.lo, value.hi);
    return u128.from(__divmod_rem);
  }

  /**
   * Calculate power of base with exponent
   * @param  base     128-bit unsigned integer
   * @param  exponent 32-bit signed integer
   * @returns         128-bit unsigned integer
   */
  @operator('**')
  static pow(base: u128, exponent: i32): u128 {
    // any negative exponent produce zero

    var result = u128.One;

    if (base == result) return result;
    if (exponent < 0) return u128.Zero;

    var tmp = base.clone();

    switch (exponent) {
      case 0: return result;
      case 1: return tmp;
    }

    var lo = base.lo;
    var hi = base.hi;

    if (ASC_SHRINK_LEVEL < 1) {
      // if base > u64::max and exp > 1 always return "0"
      if (!lo) return u128.Zero;
      if (!hi) {
        let lo1 = lo - 1;
        // "1 ^ exponent" always return "1"
        if (!lo1) return u128.One;

        // if base is power of two do "1 << log2(base) * exp"
        if (!(lo & lo1)) {
          let shift = <i32>(64 - clz(lo1)) * exponent;
          return shift < 128 ? u128.One << shift : u128.Zero;
        }
      }

      if (exponent <= 4) {
        let sqrbase = u128.sqr(base);
        switch (exponent) {
          case 2: return sqrbase;        // base ^ 2
          case 3: return sqrbase * base; // base ^ 2 * base
          case 4: return sqrbase.sqr();  // base ^ 2 * base ^ 2
          default: break;
        }
      }

      let log = 32 - clz(exponent);
      if (log <= 7) {
        // 128 = 2 ^ 7, so need usually only seven cases
        switch (log) {
          case 7:
            if (exponent & 1) result *= tmp;
            exponent >>= 1;
            tmp.sqr();
          case 6:
            if (exponent & 1) result *= tmp;
            exponent >>= 1;
            tmp.sqr();
          case 5:
            if (exponent & 1) result *= tmp;
            exponent >>= 1;
            tmp.sqr();
          case 4:
            if (exponent & 1) result *= tmp;
            exponent >>= 1;
            tmp.sqr();
          case 3:
            if (exponent & 1) result *= tmp;
            exponent >>= 1;
            tmp.sqr();
          case 2:
            if (exponent & 1) result *= tmp;
            exponent >>= 1;
            tmp.sqr();
          case 1:
            if (exponent & 1) result *= tmp;
        }
        return result;
      }
    }

    while (exponent > 0) {
      if (exponent & 1) result *= tmp;
      exponent >>= 1;
      tmp.sqr();
    }
    return result;
  }

  static sqrt(value: u128): u128 {
    if (value <= u128.One)    return value;
    if (value <= new u128(3)) return u128.One;

    let res: u64 = 0;
    let add: u64 = 0x8000000000000000;
    let tmp = new u128();
    for (let i = 0; i < 64; ++i) {
      tmp.setU64(res | add);
      let sqr = tmp * tmp;
      if (value >= sqr) {
        res = tmp.lo;
      }
      add >>= 1;
    }
    return new u128(res);
  }

  @inline @operator('==')
  static eq(a: u128, b: u128): bool {
    return a.hi == b.hi && a.lo == b.lo;
  }

  @inline @operator('!=')
  static ne(a: u128, b: u128): bool {
    return !u128.eq(a, b);
  }

  @inline @operator('<')
  static lt(a: u128, b: u128): bool {
    var ah = a.hi, bh = b.hi;
    return ah == bh ? a.lo < b.lo : ah < bh;
  }

  @inline @operator('>')
  static gt(a: u128, b: u128): bool {
    var ah = a.hi, bh = b.hi;
    return ah == bh ? a.lo > b.lo : ah > bh;
  }

  @inline @operator('<=')
  static le(a: u128, b: u128): bool {
    return !u128.gt(a, b);
  }

  @inline @operator('>=')
  static ge(a: u128, b: u128): bool {
    return !u128.lt(a, b);
  }

  @inline
  static cmp(a: u128, b: u128): i32 {
    var dlo: i64 = a.lo - b.lo;
    var dhi: i64 = a.hi - b.hi;
    // return <i32>(dhi != 0 ? dhi : dlo);
    return <i32>select<i64>(dhi, dlo, dhi != 0);
  }

  /**
   * Compute count of set (populated) bits
   * @param  value 128-bit unsigned integer
   * @returns      32-bit signed integer
   */
  @inline
  static popcnt(value: u128): i32 {
    return <i32>(popcnt(value.lo) + popcnt(value.hi));
  }

  /**
   * Compute bit count of leading zeros
   * @param  value 128-bit unsigned integer
   * @returns      32-bit signed integer
   */
  @inline
  static clz(value: u128): i32 {
    return __clz128(value.lo, value.hi);
  }

  /**
   * Compute bit count of trailing zeros
   * @param  value 128-bit unsigned integer
   * @returns      32-bit signed integer
   */
  @inline
  static ctz(value: u128): i32 {
    return __ctz128(value.lo, value.hi);
  }

  /**
   * Calculate squared value (value ** 2)
   * @param  value 128-bit unsigned integer
   * @returns      128-bit unsigned integer
   */
  static sqr(value: u128): u128 {
    return value.clone().sqr();
  }

  // wide mul: u128 * u128 = u256
  static mulq(a: u128, b: u128): u256 {
    // TODO
    return u256.Zero;
  }

  /**
   * Calculate inplace squared 128-bit unsigned integer (this ** 2)
   * @returns 128-bit unsigned integer
   */
  sqr(): this {
    var u = this.lo,
        v = this.hi;

    var u1 = u & 0xFFFFFFFF;
    var t  = u1 * u1;
    var w  = t & 0xFFFFFFFF;
    var k  = t >> 32;

    u >>= 32;
    var m = u * u1;
    t = m + k;
    var w1 = t >> 32;

    t = m + (t & 0xFFFFFFFF);

    var lo = (t << 32) + w;
    var hi  = u * u;
        hi += w1 + (t >> 32);
        hi += u * v << 1;

    this.lo = lo;
    this.hi = hi;

    return this;
  }

  /**
  * Convert to 256-bit signed integer
  * @returns 256-bit signed integer
  */
  @inline
  toI256(): i256 {
    return new i256(this.lo, this.hi);
  }

  /**
  * Convert to 256-bit unsigned integer
  * @returns 256-bit unsigned integer
  */
  @inline
  toU256(): u256 {
    return new u256(this.lo, this.hi);
  }

  /**
  * Convert to 128-bit signed integer
  * @returns 128-bit signed integer
  */
  @inline
  toI128(): i128 {
    return new i128(this.lo, this.hi);
  }

  /**
  * Convert to 128-bit unsigned integer
  * @returns 128-bit unsigned integer
  */
  @inline
  toU128(): this {
    return this;
  }

  /**
  * Convert to 64-bit signed integer
  * @returns 64-bit signed integer
  */
  @inline
  toI64(): i64 {
    return <i64>(
      (this.lo & 0x7FFFFFFFFFFFFFFF) |
      (this.hi & 0x8000000000000000)
    );
  }

  /**
  * Convert to 64-bit unsigned integer
  * @returns 64-bit unsigned integer
  */
  @inline
  toU64(): u64 {
    return this.lo;
  }

  /**
  * Convert to 32-bit signed integer
  * @returns 32-bit signed integer
  */
  @inline
  toI32(): i32 {
    return <i32>this.toI64();
  }

  /**
  * Convert to 32-bit unsigned integer
  * @returns 32-bit unsigned integer
  */
  @inline
  toU32(): u32 {
    return <u32>this.lo;
  }

  /**
  * Convert to 1-bit boolean
  * @returns 1-bit boolean
  */
  @inline
  toBool(): bool {
    return (this.lo | this.hi) != 0;
  }

  /**
  * Convert to 64-bit float number in deteministic way
  * @returns 64-bit float
  */
  @inline
  toF64(): f64 {
    return __floatuntidf(this.lo, this.hi);
  }

  // Simpler and faster alternative of "toF64"
  // but non-deteministic (using float point arithmetics)
  toF64Unsafe(): f64 {
    const shift = reinterpret<f64>(0x43F0000000000000); // 2 ^ 64
    var lo = this.lo, hi = this.hi;

    if (hi >= 0)
      return <f64>hi * shift + <f64>lo;

    var rh: i64 = ~hi;
    var rl: u64 = ~lo;

    var cy = ((rl & 1) + (rl >> 1)) >> 63;
    rl += 1;
    rh += cy;

    return -(<f64>rh * shift + <f64>rl);
  }

  /**
  * Convert to 32-bit float number
  * @returns 32-bit float
  */
  @inline
  toF32(): f32 {
    return <f32>this.toF64();
  }

  /**
   * Convert to generic type T. Useful inside other generics methods
   * @param  T  is <bool | i8 | u8 | i16 | u16 | i32 | u32 | i64 | u64 | f32 | f64 | u128 | u256 | u8[]>
   * @returns   type of T
   */
  @inline
  as<T>(): T {
    var dummy: T;

         if (dummy instanceof bool)   return <T>this.toBool();
    else if (dummy instanceof i8)     return <T>this.toI64();
    else if (dummy instanceof u8)     return <T>this.toU64();
    else if (dummy instanceof i16)    return <T>this.toI64();
    else if (dummy instanceof u16)    return <T>this.toU64();
    else if (dummy instanceof i32)    return <T>this.toI64();
    else if (dummy instanceof i64)    return <T>this.toI64();
    else if (dummy instanceof u32)    return <T>this.toU64();
    else if (dummy instanceof u64)    return <T>this.toU64();
    else if (dummy instanceof f32)    return <T>this.toF64();
    else if (dummy instanceof f64)    return <T>this.toF64();
    else if (dummy instanceof i128)   return <T>(this.toI128());
    else if (dummy instanceof u128)   return <T>(this.toU128());
    else if (dummy instanceof u256)   return <T>(this.toU256());
    else if (dummy instanceof u8[])   return <T>(this.toBytes());
    else if (dummy instanceof String) return <T>this.toString();
    else throw new TypeError('Unsupported generic type');
  }

  /**
   * Convert to byte array
   * @param le Little or Big Endian? Default: true
   * @returns  Array of bytes
   */
  @inline
  toBytes(bigEndian: bool = false): u8[] {
    return bigEndian ? this.toBytesBE() : this.toBytesLE();
  }

  /**
  * Convert to Little Endian byte array
  * @returns Array of bytes
  */
  toBytesLE(): u8[] {
    var hi = this.hi, lo = this.lo;

    var result: u8[] = [
      <u8>(lo >>  0), <u8>(lo >>  8), <u8>(lo >> 16), <u8>(lo >> 24),
      <u8>(lo >> 32), <u8>(lo >> 40), <u8>(lo >> 48), <u8>(lo >> 56),

      <u8>(hi >>  0), <u8>(hi >>  8), <u8>(hi >> 16), <u8>(hi >> 24),
      <u8>(hi >> 32), <u8>(hi >> 40), <u8>(hi >> 48), <u8>(hi >> 56),
    ];

    return result;
  }

  /**
  * Convert to Big Endian byte array
  * @return Array of bytes
  */
  toBytesBE(): u8[] {
    var hi = this.hi, lo = this.lo;

    var result: u8[] = [
      <u8>(hi >> 56), <u8>(hi >> 48), <u8>(hi >> 40), <u8>(hi >> 32),
      <u8>(hi >> 24), <u8>(hi >> 16), <u8>(hi >>  8), <u8>(hi >>  0),

      <u8>(lo >> 56), <u8>(lo >> 48), <u8>(lo >> 40), <u8>(lo >> 32),
      <u8>(lo >> 24), <u8>(lo >> 16), <u8>(lo >>  8), <u8>(lo >>  0),
    ];

    return result;
  }

  /**
  * Return copy of current 128-bit value
  * @returns 128-bit unsigned integer
  */
  @inline
  clone(): u128 {
    return new u128(this.lo, this.hi);
  }

  // TODO compleate and improve this
  toString(radix: i32 = 0): string {
    if (!radix) radix = 10;
    assert(radix == 10 || radix == 16, 'radix argument must be between 10 or 16');

    if (this.isZero()) return '0';

    var result = '';
    var it = this.clone();
    if (radix == 16) {
      let shift: i32 = 124 - (u128.clz(it) & ~3);
      while (shift >= 0) {
        it     >>= shift;
        result = result.concat(HEX_CHARS.charAt(<i32>(it.lo & 15)));
        shift  -= 4;
      }
      return result;
    } else if (radix == 10) {
      return utoa10(this);
    }

    return "undefined";
  }
}
