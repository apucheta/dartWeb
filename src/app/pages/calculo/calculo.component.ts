import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  montoTotal: number=0;
  montoInterior: number = 0;
  montoSemicubierta: number = 0;
  montoDescubierta: number = 0;
  montoAltura: number = 0;
  montoPiscina: number = 0;

  valorInterior: number = 100;
  valorSemiCubierta:number = 100;
  valorPiscina: number = 250;
  valorAltura: number = 300;
  valorDescubierta: number = 355;

  public metrosInterior: number;
  public metrosSemicubierta: number;
  public metrosDescubierta: number;
  public metrosDAltura: number;
  public metrosPiscina: number;

  constructor() { }

  ngOnInit(): void {
  }

  //calculo de costos
  public calcular(metros, tipo: string){
    switch (tipo) {
      case 'interior':
        this.montoInterior += metros*this.valorInterior;
        this.montoTotal += this.montoInterior;
        break;
      case 'semicubierta':
        this.montoSemicubierta += metros*this.valorSemiCubierta;
        this.montoTotal += this.montoSemicubierta;
        break;
      case 'descubierta':
        this.montoDescubierta += metros*this.valorDescubierta;
        this.montoTotal += this.montoDescubierta;
        break;
      case 'dAltura':
        this.montoAltura += metros*this.valorAltura;
        this.montoTotal += this.montoAltura;
        break;
      case 'piscina':
        this.montoPiscina += metros*this.valorPiscina;
        this.montoTotal += this.montoPiscina;
        break;
    }

  }

}
