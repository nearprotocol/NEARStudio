import { u128  } from "../integer/u128";
import { fp128 } from "./fp128";
import { fp256 } from "./fp256";
import {
  u24,
  u40,
  u48,
  u56,
  u72,
  u80,
  u88,
  u96,
  u104,
  u112,
  u120,
  u136,
  u144,
  u152,
  u160,
  //u168,
  //u176,
  //u184,
  //u192,
} from './types';

export { fp128, fp256 };

export class fixed128x8  extends fp128<u8> {}
export class fixed128x16 extends fp128<u16> {}
export class fixed128x24 extends fp128<u24> {}
export class fixed128x32 extends fp128<u32> {}
export class fixed128x40 extends fp128<u40> {}
export class fixed128x48 extends fp128<u48> {}
export class fixed128x56 extends fp128<u56> {}
export class fixed128x64 extends fp128<u64> {}
export class fixed128x72 extends fp128<u72> {}
export class fixed128x80 extends fp128<u80> {}
// export class fixed128x88 extends fp128<u88> {}
// export class fixed128x96 extends fp128<u96> {}

export class fixed256x8   extends fp256<u8> {}
export class fixed256x16  extends fp256<u16> {}
export class fixed256x24  extends fp256<u24> {}
export class fixed256x32  extends fp256<u32> {}
export class fixed256x40  extends fp256<u40> {}
export class fixed256x48  extends fp256<u48> {}
export class fixed256x56  extends fp256<u56> {}
export class fixed256x64  extends fp256<u64> {}
export class fixed256x72  extends fp256<u72> {}
export class fixed256x80  extends fp256<u80> {}
export class fixed256x88  extends fp256<u88> {}
export class fixed256x96  extends fp256<u96> {}
export class fixed256x104 extends fp256<u104> {}
export class fixed256x112 extends fp256<u112> {}
export class fixed256x120 extends fp256<u120> {}
export class fixed256x128 extends fp256<u128> {}
export class fixed256x136 extends fp256<u136> {}
export class fixed256x144 extends fp256<u144> {}
export class fixed256x152 extends fp256<u152> {}
export class fixed256x160 extends fp256<u160> {}
// export class fixed256x168 extends fp256<u168> {}
// export class fixed256x176 extends fp256<u176> {}
// export class fixed256x184 extends fp256<u184> {}
// export class fixed256x192 extends fp256<u192> {}
