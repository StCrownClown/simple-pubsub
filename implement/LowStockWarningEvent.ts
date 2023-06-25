import { IEvent } from '../interface/IEvent';

export class LowStockWarningEvent implements IEvent {
  private _type: string = "low";
  private readonly _machineId;

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