export default class Car {
  private _car;

  constructor(car) {
    this._car = car;
  }

  teste() { //teste
    this._car.nativeElement.style.left = "100px";
  }

}
