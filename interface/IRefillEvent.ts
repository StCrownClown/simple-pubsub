// interfaces
import { IEvent } from '../interface/IEvent';

export interface IRefillEvent extends IEvent {
  getRefillQuantity(): number;
}