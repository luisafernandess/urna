import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RetanguloHorizontalComponent } from '../retangulo-horizontal/retangulo-horizontal.component';

@Component({
  selector: 'app-retangulo-vertical',
  standalone: true,
  imports: [NgFor],
  templateUrl: './retangulo-vertical.component.html',
  styleUrl: './retangulo-vertical.component.css'
})
export class RetanguloVerticalComponent {
//declarçao de array
//nomedavariavel=[]
numeros=[9,8,7,6,5,4,3,2,1,0];
@Output() numerodigitado=new EventEmitter<string>();
enviarvalor(numero:number){

  this.numerodigitado.emit(numero.toString());
}
}
