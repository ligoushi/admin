export class TypedArrayList<T extends Uint16Array | Float32Array | Uint8Array> {
  private _array: T;
  private _typedArrayConstructor: (new (length: number) => T);
  private _length: number
  private _capacity: number
  public constructor (typedArrayConstructor: new (capacity: number) => T, capacity: number = 8) {
    this._typedArrayConstructor = typedArrayConstructor
    this._capacity = capacity
    if (this._capacity === 0) {
      this._capacity = 8
    }
    this._array = new this._typedArrayConstructor(this._capacity)
    this._length = 0
  }

  public push (num:number):number {
    if (this._length >= this._capacity) {
      if (this._capacity > 0) {
        this._capacity += this._capacity
        this.capacityChangeCallback && this.capacityChangeCallback(this)
      }
      const oldArray:T = this._array
      this._array = new this._typedArrayConstructor(this._capacity)
      this._array.set(oldArray)
    }
    this._array[this._length++] = num
    return this._length
  }

  public slice (start:number = 0, end:number = this.length):T {
    return this._array.slice(start, end) as T
  }

  public subArray (start:number = 0, end:number = this.length):T {
    return this._array.subarray(start, end) as T
  }

  public get length ():number {
    return this._length
  }

  public get capacity ():number {
    return this.capacity
  }

  public get typeArray ():T {
    return this._array
  }

  public clear () :void {
    this._length = 0
  }

  public as (idx:number):number {
    if (idx < 0 || idx > this.length) {
      throw new Error('索引越界')
    }
    const ret:number = this._array[idx]
    return ret
  }

  public capacityChangeCallback:((arrayList:TypedArrayList<T>)=>void)|null = null
}
