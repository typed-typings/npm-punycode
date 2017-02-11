// This file is only used for the compilation of `source-test`.

declare class Buffer extends Uint8Array {
  [index: number]: number;
  /**
   * Allocates a new buffer containing the given {str}.
   *
   * @param str String to store in buffer.
   * @param encoding encoding to use, optional.  Default is 'utf8'
   */
  constructor(str: string, encoding?: string);
  /**
   * Allocates a new buffer of {size} octets.
   *
   * @param size count of octets to allocate.
   */
  constructor(size: number);
  /**
   * Allocates a new buffer containing the given {array} of octets.
   *
   * @param array The octets to store.
   */
  constructor(array: Uint8Array);
  /**
   * Produces a Buffer backed by the same allocated memory as
   * the given {ArrayBuffer}.
   *
   *
   * @param arrayBuffer The ArrayBuffer with which to share memory.
   */
  constructor(arrayBuffer: ArrayBuffer);
  /**
   * Allocates a new buffer containing the given {array} of octets.
   *
   * @param array The octets to store.
   */
  constructor(array: any[]);
  /**
   * Copies the passed {buffer} data onto a new {Buffer} instance.
   *
   * @param buffer The buffer to copy.
   */
  constructor(buffer: Buffer);
  /**
   * Allocates a new Buffer using an {array} of octets.
   *
   * @param array
   */
  static from(array: any[]): Buffer;
  /**
   * When passed a reference to the .buffer property of a TypedArray instance,
   * the newly created Buffer will share the same allocated memory as the TypedArray.
   * The optional {byteOffset} and {length} arguments specify a memory range
   * within the {arrayBuffer} that will be shared by the Buffer.
   *
   * @param arrayBuffer The .buffer property of a TypedArray or a new ArrayBuffer()
   * @param byteOffset
   * @param length
   */
  static from(arrayBuffer: ArrayBuffer, byteOffset?: number, length?: number): Buffer;
  /**
   * Copies the passed {buffer} data onto a new Buffer instance.
   *
   * @param buffer
   */
  static from(buffer: Buffer): Buffer;
  /**
   * Creates a new Buffer containing the given JavaScript string {str}.
   * If provided, the {encoding} parameter identifies the character encoding.
   * If not provided, {encoding} defaults to 'utf8'.
   *
   * @param str
   */
  static from(str: string, encoding?: string): Buffer;
  /**
   * Allocates a new `Buffer` of `size` bytes. If `fill` is `undefined`, the `Buffer` will be _zero-filled_.
   *
   * @param size The desired length of the new `Buffer`
   * @param fill A value to pre-fill the new `Buffer` with. Default: `0`
   * @param encoding If `fill` is a string, this is its encoding. Default: `'utf8'`
   */
  static alloc(size: number, fill?: string | Buffer | number, encoding?: string): Buffer;
  /**
   * Allocates a new _non-zero-filled_ `Buffer` of `size` bytes. The `size` must be less than or equal to the value of `buffer.kMaxLength`. Otherwise, a `RangeError` is thrown. A zero-length `Buffer` will be created if `size <= 0`.
   *
   * The underlying memory for `Buffer` instances created in this way is not initialized. The contents of the newly created `Buffer` are unknown and _may contain sensitive data_. Use `buf.fill(0)` to initialize such `Buffer` instances to zeroes.
   *
   * @param size The desired length of the new `Buffer`
   */
  static allocUnsafe(size: number): Buffer;
  /**
   * Returns `true` if `obj` is a Buffer, `false` otherwise.
   */
  static isBuffer(obj: any): obj is Buffer;
  /**
   * Returns `true` if `encoding` contains a supported character encoding, or `false` otherwise.
   *
   * @param encoding A character encoding name to check.
   */
  static isEncoding(encoding: string): boolean;
  /**
   * Gives the actual byte length of a string. encoding defaults to 'utf8'.
   * This is not the same as String.prototype.length since that returns the number of characters in a string.
   *
   * @param string string to test.
   * @param encoding encoding used to evaluate (defaults to 'utf8')
   */
  static byteLength(string: string, encoding?: string): number;
  /**
   * Returns a buffer which is the result of concatenating all the buffers in the list together.
   *
   * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
   * If the list has exactly one item, then the first item of the list is returned.
   * If the list has more than one item, then a new Buffer is created.
   *
   * @param list An array of Buffer objects to concatenate
   * @param totalLength Total length of the buffers when concatenated.
   *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
   */
  static concat(list: Buffer[], totalLength?: number): Buffer;
  /**
   * The same as buf1.compare(buf2).
   */
  compare(buf1: Buffer, buf2: Buffer): number;
  write(string: string, offset?: number, length?: number, encoding?: string): number;
  toString(encoding?: string, start?: number, end?: number): string;
  toJSON(): any;
  equals(otherBuffer: Buffer): boolean;
  compare(otherBuffer: Buffer): number;
  copy(targetBuffer: Buffer, targetStart?: number, sourceStart?: number, sourceEnd?: number): number;
  slice(start?: number, end?: number): Buffer;
  writeUIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  writeUIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  writeIntLE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  writeIntBE(value: number, offset: number, byteLength: number, noAssert?: boolean): number;
  readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
  readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
  readIntLE(offset: number, byteLength: number, noAssert?: boolean): number;
  readIntBE(offset: number, byteLength: number, noAssert?: boolean): number;
  readUInt8(offset: number, noAssert?: boolean): number;
  readUInt16LE(offset: number, noAssert?: boolean): number;
  readUInt16BE(offset: number, noAssert?: boolean): number;
  readUInt32LE(offset: number, noAssert?: boolean): number;
  readUInt32BE(offset: number, noAssert?: boolean): number;
  readInt8(offset: number, noAssert?: boolean): number;
  readInt16LE(offset: number, noAssert?: boolean): number;
  readInt16BE(offset: number, noAssert?: boolean): number;
  readInt32LE(offset: number, noAssert?: boolean): number;
  readInt32BE(offset: number, noAssert?: boolean): number;
  readFloatLE(offset: number, noAssert?: boolean): number;
  readFloatBE(offset: number, noAssert?: boolean): number;
  readDoubleLE(offset: number, noAssert?: boolean): number;
  readDoubleBE(offset: number, noAssert?: boolean): number;
  writeUInt8(value: number, offset: number, noAssert?: boolean): number;
  writeUInt16LE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt16BE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt32LE(value: number, offset: number, noAssert?: boolean): number;
  writeUInt32BE(value: number, offset: number, noAssert?: boolean): number;
  writeInt8(value: number, offset: number, noAssert?: boolean): number;
  writeInt16LE(value: number, offset: number, noAssert?: boolean): number;
  writeInt16BE(value: number, offset: number, noAssert?: boolean): number;
  writeInt32LE(value: number, offset: number, noAssert?: boolean): number;
  writeInt32BE(value: number, offset: number, noAssert?: boolean): number;
  writeFloatLE(value: number, offset: number, noAssert?: boolean): number;
  writeFloatBE(value: number, offset: number, noAssert?: boolean): number;
  writeDoubleLE(value: number, offset: number, noAssert?: boolean): number;
  writeDoubleBE(value: number, offset: number, noAssert?: boolean): number;
  fill(value: any, offset?: number, end?: number): this;
  indexOf(value: string | number | Buffer, byteOffset?: number, encoding?: string): number;
  lastIndexOf(value: string | number | Buffer, byteOffset?: number, encoding?: string): number;
  swap16(): this;
  swap32(): this;
  swap64(): this;
  includes(value: string | number | Buffer, byteOffset?: number, encoding?: string): boolean;
  // entries(): IterableIterator<[number, number]>;
  // keys(): IterableIterator<number>;
  // values(): IterableIterator<number>;
}

declare namespace NodeJS {
  export interface EventEmitter {
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    prependListener(event: string, listener: Function): this;
    prependOnceListener(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    eventNames(): string[];
    listenerCount(type: string): number;
  }

  export interface ReadableStream extends EventEmitter {
    readable: boolean;
    read(size?: number): string | Buffer;
    setEncoding(encoding: string): this;
    isPaused(): boolean;
    pause(): this;
    resume(): this;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends WritableStream>(destination?: T): void;
    unshift(chunk: string): void;
    unshift(chunk: Buffer): void;
    wrap(oldStream: ReadableStream): ReadableStream;
  }

  export interface WritableStream extends EventEmitter {
    writable: boolean;
    setDefaultEncoding(encoding: string): this;
    write(buffer: Buffer | string, cb?: Function): boolean;
    write(str: string, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(buffer: Buffer, cb?: Function): void;
    end(str: string, cb?: Function): void;
    end(str: string, encoding?: string, cb?: Function): void;
  }

  export interface ReadWriteStream extends ReadableStream, WritableStream { }
}

declare module 'events' {
  export class EventEmitter implements NodeJS.EventEmitter {
    static EventEmitter: EventEmitter;
    static listenerCount(emitter: EventEmitter, event: string): number; // deprecated
    static defaultMaxListeners: number;

    addListener(event: string, listener: (...args: any[]) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    removeListener(event: string, listener: (...args: any[]) => void): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Array<(...args: any[]) => void>;
    listenerCount(event: string): number;
    emit(event: string, ...args: any[]): boolean;
    eventNames(): string[];
  }

  export interface Listener<E extends string, L extends Function> {
    on(event: E, listener: L): this;
    once(event: E, listener: L): this;
    addListener(event: E, listener: L): this;
    removeListener(event: E, listener: L): this;
    listeners(event: E): L[];
  }
}

declare module 'stream' {
  import * as events from 'events';

  export class Stream extends events.EventEmitter {
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
  }

  export interface ReadableOptions {
    highWaterMark?: number;
    encoding?: string;
    objectMode?: boolean;
    read?: (this: Readable, size?: number) => any;
  }

  export class Readable extends events.EventEmitter implements NodeJS.ReadableStream {
    readable: boolean;
    constructor(opts?: ReadableOptions);
    _read(size: number): void;
    read(size?: number): any;
    isPaused(): boolean;
    setEncoding(encoding: string): this;
    pause(): this;
    resume(): this;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends NodeJS.WritableStream>(destination?: T): void;
    unshift(chunk: any): void;
    wrap(oldStream: NodeJS.ReadableStream): NodeJS.ReadableStream;
    push(chunk: any, encoding?: string): boolean;
  }

  export interface WritableOptions {
    highWaterMark?: number;
    decodeStrings?: boolean;
    objectMode?: boolean;
    write?: (chunk: string | Buffer, encoding: string, callback: Function) => any;
    writev?: (chunks: { chunk: string | Buffer, encoding: string }[], callback: Function) => any;
  }

  export class Writable extends events.EventEmitter implements NodeJS.WritableStream {
    writable: boolean;
    constructor(opts?: WritableOptions);
    setDefaultEncoding(encoding: string): this;
    _write(chunk: any, encoding: string, callback: Function): void;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
  }

  export interface DuplexOptions extends ReadableOptions, WritableOptions {
    allowHalfOpen?: boolean;
    readableObjectMode?: boolean;
    writableObjectMode?: boolean;
  }

  // Note: Duplex extends both Readable and Writable.
  export class Duplex extends Readable implements Writable {
    writable: boolean;
    constructor(opts?: DuplexOptions);
    setDefaultEncoding(encoding: string): this;
    _write(chunk: any, encoding: string, callback: Function): void;
    write(chunk: any, cb?: Function): boolean;
    write(chunk: any, encoding?: string, cb?: Function): boolean;
    end(): void;
    end(chunk: any, cb?: Function): void;
    end(chunk: any, encoding?: string, cb?: Function): void;
  }

  export interface TransformOptions extends ReadableOptions, WritableOptions {
    write?: (chunk: string | Buffer, encoding: string, callback: Function) => any;
    writev?: (chunks: { chunk: string | Buffer, encoding: string }[], callback: Function) => any;
  }

  export class Transform extends Duplex {
    constructor(opts?: TransformOptions);
    _transform(chunk: any, encoding: string, callback: Function): void;
  }

  export class PassThrough extends Transform { }
}

declare module 'assert' {
  function internal(value: any, message?: string): void;
  namespace internal {
    export class AssertionError implements Error {
      name: string;
      message: string;
      actual: any;
      expected: any;
      operator: string;
      generatedMessage: boolean;

      constructor(options?: {
        message?: string; actual?: any; expected?: any;
        operator?: string; stackStartFunction?: Function
      });
    }

    export function fail(actual?: any, expected?: any, message?: string, operator?: string): void;
    export function ok(value: any, message?: string): void;
    export function equal(actual: any, expected: any, message?: string): void;
    export function notEqual(actual: any, expected: any, message?: string): void;
    export function deepEqual(actual: any, expected: any, message?: string): void;
    export function notDeepEqual(acutal: any, expected: any, message?: string): void;
    export function strictEqual(actual: any, expected: any, message?: string): void;
    export function notStrictEqual(actual: any, expected: any, message?: string): void;
    export function deepStrictEqual(actual: any, expected: any, message?: string): void;
    export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;
    export const throws: {
      (block: Function, message?: string): void;
      (block: Function, error: Function, message?: string): void;
      (block: Function, error: RegExp, message?: string): void;
      (block: Function, error: (err: any) => boolean, message?: string): void;
    };

    export const doesNotThrow: {
      (block: Function, message?: string): void;
      (block: Function, error: Function, message?: string): void;
      (block: Function, error: RegExp, message?: string): void;
      (block: Function, error: (err: any) => boolean, message?: string): void;
    };

    export function ifError(value: any): void;
  }

  export = internal;
}
