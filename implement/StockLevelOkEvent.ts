import { IEvent } from '../interface/IEvent';

export class StockLevelOkEvent implements IEvent {
  private _type: string = "ok";
  private readonly _machineId: string;

  constructor(_machineId: string) {
    this._machineId = _machineId;
  }

  machineId(): string {
    return this._machineId;
  }

  type(): string {
    return this._type;
  }
}