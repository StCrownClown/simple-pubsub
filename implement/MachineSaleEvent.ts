import { IEvent } from '../interface/IEvent';

export class MachineSaleEvent implements IEvent {
  private _type: string = "sale";
  private readonly _sold;
  private readonly _machineId;

  constructor(_sold: number, _machineId: string) {
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