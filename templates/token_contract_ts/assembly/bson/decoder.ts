

/**
 * Extend from this class to handle events from parser.
 * Default implementation traverses whole object tree and does nothing.
 */
export abstract class BSONHandler {
    setString(name: string, value: string): void {
    }

    setBoolean(name: string, value: bool): void {
    }

    setNull(name: string): void {
    }

    setInteger(name: string, value: i32): void {
    }

    setUint8Array(name: string, value: Uint8Array): void {
    }

    pushArray(name: string): bool {
        return true;
    }

    popArray(): void {
    }

    pushObject(name: string): bool {
        return true;
    }

    popObject(): void {
    }
}

export class BSONDecoder<BSONHandlerT extends BSONHandler> {
    handler: BSONHandlerT;

    constructor(handler: BSONHandlerT) {
        this.handler = handler;
    }

    deserialize(buffer: Uint8Array, i: i32 = 0): void {
        assert(buffer.length > 5, "Document error: Size < 5 bytes");

        let size : i32 = buffer[i++] | i32(buffer[i++]) << 8 | i32(buffer[i++]) << 16 | i32(buffer[i++]) << 24;
        assert(size > 5 && size <= buffer.length, "Document error: Size mismatch");
        assert(buffer[buffer.length - 1] == 0x00, "Document error: Missing termination");

        for (; ;) {
            // get element type
            let elementType = buffer[i++];  // read type
            if (elementType === 0) break;   // zero means last byte, exit

            // get element name
            let end = i;
            for (; buffer[end] !== 0x00 && end < buffer.length; end++);
            assert(end < buffer.length - 1, "Document error: Illegal key name");
            let name = bin2str(buffer.subarray(i, end));
            i = ++end;                      // skip terminating zero

            switch (elementType) {
                case 0x02:                    // BSON type: String
                    size = buffer[i++] | i32(buffer[i++]) << 8 | i32(buffer[i++]) << 16 | i32(buffer[i++]) << 24;
                    this.handler.setString(name, bin2str(buffer.subarray(i, i += size - 1)));
                    i++;
                    break;

                case 0x03:                    // BSON type: Document (Object)
                    size = buffer[i] | i32(buffer[i + 1]) << 8 | i32(buffer[i + 2]) << 16 | i32(buffer[i + 3]) << 24;
                    if (this.handler.pushObject(name)) {
                        this.deserialize(buffer, i);
                    }
                    this.handler.popObject();
                    i += size;
                    break;

                case 0x04:                    // BSON type: Array
                    size = buffer[i] | i32(buffer[i + 1]) << 8 | i32(buffer[i + 2]) << 16 | i32(buffer[i + 3]) << 24;  // NO 'i' increment since the size bytes are reread during the recursion
                    if (this.handler.pushArray(name)) {
                        this.deserialize(buffer, i);
                    }
                    this.handler.popArray();
                    i += size;
                    break;

                case 0x05:                    // BSON type: Binary data
                    size = buffer[i++] | i32(buffer[i++]) << 8 | i32(buffer[i++]) << 16 | i32(buffer[i++]) << 24;
                    if (buffer[i++] === 0x04) {
                        // BSON subtype: UUID (not supported)
                        return
                    }
                    this.handler.setUint8Array(name, buffer.subarray(i, i += size));    // use slice() here to get a new array
                    break;

                case 0x08:                    // BSON type: Boolean
                    this.handler.setBoolean(name, buffer[i++] === 1);
                    break;

                case 0x0A:                    // BSON type: Null
                    this.handler.setNull(name);
                    break;

                case 0x10:                    // BSON type: 32-bit integer
                    this.handler.setInteger(name, buffer[i++] | i32(buffer[i++]) << 8 | i32(buffer[i++]) << 16 | i32(buffer[i++]) << 24);
                    break;

                default:
                    assert(false, "Parsing error: Unknown element");
            }
        }
    }
}

/*
 * Parse byte array as an UTF-8 string
 * @param {Uint8Array} bin UTF-8 text given as array of bytes
 * @return {String} UTF-8 Text string
 */
export function bin2str(bin: Uint8Array): string {
    let str = '', len = bin.length, i = 0;
    let c: i32, c2: i32, c3: i32;

    while (i < len) {
        c = bin[i];
        if (c < 128) {
            str += String.fromCharCode(c);
            i++;
        }
        else if ((c > 191) && (c < 224)) {
            c2 = bin[i + 1];
            str += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = bin[i + 1];
            c3 = bin[i + 2];
            str += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    return str;
}
