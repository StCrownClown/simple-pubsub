import { IEvent } from '../interface/IEvent';

export class StockLevelOkEvent implements IEvent {
  private _type: string = "ok";

  constructor(private readonly _sold: number, private readonly _machineId: string) {
    this._sold = _sold;
    this._machineId = _machineId;
  }

  machineId(): string {
    return this._machineId;
  }

  getSoldQuantity(): number {
    return this._sold
  }

  type(): string {
    return this._type;
  }
}