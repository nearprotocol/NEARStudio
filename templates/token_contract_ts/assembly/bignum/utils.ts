import { u128 } from "./integer";
import { CharCode } from "internal/string";

const HEX_CHARS = '0123456789abcdef';

const Pows10_64: u64[] = [
  1,
  10,
  100,
  1000,
  10000,
  100000,
  1000000,
  10000000,
  100000000,
  1000000000,

  10000000000,
  100000000000,
  1000000000000,
  10000000000000,
  100000000000000,
  1000000000000000,
  10000000000000000,
  100000000000000000,
  1000000000000000000,
  10000000000000000000,
];

@inline
function maxBaseForExponent128(): u64[] {
  const table: u64[] = [
    u64.MAX_VALUE,       // 0
    u64.MAX_VALUE,       // 1
    u64.MAX_VALUE,       // 2
    0x000006597FA94F5B,  // 3
    0x00000000FFFFFFFF,  // 4
    0x0000000003080C00,  // 5
    0x0000000000285145,  // 6
    0x000000000004E045,  // 7
    0x000000000000FFFF,  // 8
    0x0000000000004AA8,  // 9
    0x0000000000001BDB,  // 10
    0x0000000000000C6F,  // 11
    0x0000000000000659,  // 12
    0x0000000000000398,  // 13
    0x0000000000000235,  // 14
    0x0000000000000172,  // 15
    0x00000000000000FF,  // 16
    0x00000000000000B8,  // 17
    0x000000000000008A,  // 18
    0x000000000000006A,  // 19
    0x0000000000000054,  // 20
    0x0000000000000044,  // 21
    0x0000000000000038,  // 22
    0x000000000000002F,  // 23
    0x0000000000000028,  // 24
    0x0000000000000022,  // 25
    0x000000000000001E,  // 26
    0x000000000000001A,  // 27
    0x0000000000000017,  // 28
    0x0000000000000015,  // 29
    0x0000000000000013,  // 30
    0x0000000000000011,  // 31
    0x000000000000000F,  // 32
    0x000000000000000E,  // 33
    0x000000000000000D,  // 34
    0x000000000000000C,  // 35
    0x000000000000000B,  // 36
    0x000000000000000B,  // 37
    0x000000000000000A,  // 38
  ];
  return table;
}

// Use LUT wrapped by function for lazy compilation
@inline
function radixCharsTable(): u32[] {
  const table: u32[] = [
     0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 36, 36, 36, 36, 36, 36,
    36, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 36, 36, 36, 36,
    36, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
  ];
  return table;
}

export function isPowerOverflow128(base: u128, exponent: i32): bool {
  if (!(exponent > 1 && base > u128.One)) return false;
  if (base.hi != 0 || exponent >= 128)    return true;

  var low = base.lo;
  if (low <= 9) {
    switch (<i32>low) {
      case 2: return exponent > 127;
      case 3: return exponent > 80;
      case 4: return exponent > 63;
      case 5: return exponent > 55;
      case 6: return exponent > 49;
      case 7: return exponent > 45;
      case 8: return exponent > 42;
      case 9: return exponent > 40;
    }
  }
  var table = maxBaseForExponent128();
  return low > table[exponent];
}

export function digits10(value: u64): i32 {
  var l = 64 - <i32>clz(value); // log2
  var t = l * 1233 >>> 12;      // l / log2(10)
      t = t - <i32>(value < unchecked(Pows10_64[t]));
  return t + 1;
}

export function utoa10(value: u128): string {
  var length = 40;
  var digits = new Int8Array(length);

  for (let i = 63; i != -1; i--) {
    let left_bit = value.hi & (1 << i) ? 1 : 0;
    for (let digit_index = 0; digit_index < length; digit_index++) {
      digits[digit_index] += digits[digit_index] >= 5 ? 3 : 0;
    }
    for (let j = length - 1; j != -1; j--) {
      digits[j] <<= 1;
      if (j < length - 1) digits[j + 1] |= digits[j] > 15 ? 1 : 0;
      digits[j] &= 15;
    }
    digits[0] += <u8>left_bit;
  }

  for (let i = 63; i != -1; i--) {
    let left_bit = value.lo & (1 << i) ? 1 : 0;
    for (let digit_index = 0; digit_index < length; digit_index++) {
      digits[digit_index] += digits[digit_index] >= 5 ? 3 : 0;
    }
    for (let j = length - 1; j != -1; j--) {
      digits[j] <<= 1;
      if (j < length - 1) digits[j + 1] |= digits[j] > 15 ? 1 : 0;
      digits[j] &= 15;
    }
    digits[0] += <u8>left_bit;
  }

  var result = "";
  var start = false;
  for (let digit_index = length-1; digit_index != -1; digit_index--) {
    if (!start && digits[digit_index] > 0) start = true;
    if (start) result = result.concat(HEX_CHARS.charAt(digits[digit_index]));
  }
  return result;
}

export function atou128(str: string, radix: i32 = 0): u128 {
  if (!radix) radix = 10;
  if (radix < 2 || radix > 36) {
    throw new Error("Invalid radix");
  }
  var len = str.length;
  if (!len) return u128.Zero;

  var first = str.charCodeAt(0);
  if (len == 1 && first == CharCode._0) {
    return u128.Zero;
  }
  var isNeg = first == CharCode.MINUS;
  var index = <i32>(isNeg || first == CharCode.PLUS);

  if (str.charCodeAt(index) == CharCode._0) {
    let second = str.charCodeAt(++index);
    if (second == CharCode.x || second == CharCode.X) {
      radix = 16; ++index;
    } else if (second == CharCode.o || second == CharCode.O) {
      radix = 8; ++index;
    } else if (second == CharCode.b || second == CharCode.B) {
      radix = 2; ++index;
    }
  }
  var result = u128.Zero;
  var table  = radixCharsTable();

  if (ASC_SHRINK_LEVEL >= 1) {
    let radix128 = u128.fromU64(radix);
    do {
      let n: u32 = str.charCodeAt(index) - CharCode._0;
      if (n > <u32>(CharCode.z - CharCode._0)) break;

      let num = table[n];
      if (num >= <u32>radix) break;

      result *= radix128;
      result += u128.fromU64(num);
    } while (++index < len);
  } else {
    switch (radix) {
      case 2: {
        do {
          let num: u32 = str.charCodeAt(index) - CharCode._0;
          if (num >= 2) break;
          result <<= 1;
          result |= u128.fromU64(num);
        } while (++index < len);
        break;
      }
      case 10: {
        do {
          let num: u32 = str.charCodeAt(index) - CharCode._0;
          if (num >= 10) break;
          result  = (result << 3) + (result << 1);
          result += u128.fromU64(num);
        } while (++index < len);
        break;
      }
      case 16: {
        do {
          /*
          let n: u32 = str.charCodeAt(index) - CharCode._0;
          if (n > <u32>(CharCode.z - CharCode._0)) break;

          let num = table[n];
          if (num >= 16) break;
          */

          let num: u32 = str.charCodeAt(index);
          if (num - CharCode._0 <= 9) {
            num -= <u32>CharCode._0;
          } else if (num - 0x61 <= 5) {
            num -= 0x61 - 10;
          } else if (num - 0x41 <= 5) {
            num -= 0x41 - 10;
          }
          if (num >= 16) break;

          result <<= 4;
          result |= u128.fromU64(num);
        } while (++index < len);
        break;
      }
      default: {
        let radix128 = u128.fromU64(radix);
        do {
          let n: u32 = str.charCodeAt(index) - CharCode._0;
          if (n > <u32>(CharCode.z - CharCode._0)) break;

          let num = table[n];
          if (num >= <u32>radix) break;

          result *= radix128;
          result += u128.fromU64(num);
        } while (++index < len);
        break;
      }
    }
  }

  return isNeg ? -result : result;
}
