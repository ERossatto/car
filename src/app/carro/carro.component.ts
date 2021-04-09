import { Component, OnInit, ViewChild } from '@angular/core';

import Car from './carro.interface'

@Component({
  selector: 'carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss']
})
export class CarroComponent implements OnInit {

  private _myCar;

  constructor() { }

  @ViewChild('Car') carElement;

  ngOnInit(): void {
  }

  onButtonClick() {
    this._myCar = new Car(this.carElement);

    // daqui para baixo dentro dessa funcao

    this._myCar.teste() //teste
  }

}
