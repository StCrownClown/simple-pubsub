// objects
export class Machine {
  public stockLevel = 10;
  public id: string;
  public isLowStock: boolean = false;

  constructor(id: string) {
    this.id = id;
  }
}
