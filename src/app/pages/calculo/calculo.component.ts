import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  monto: number=0;
  montoInterior: number = 0;
  public metros: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  //calculo de costos
  calculo(metros){

  }

}
