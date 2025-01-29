import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RetanguloVerticalComponent } from "./retangulo-vertical/retangulo-vertical.component";
import { RetanguloHorizontalComponent } from "./retangulo-horizontal/retangulo-horizontal.component";
import { DadosQuadradoComponent } from "./dados-quadrado/dados-quadrado.component";
import { Professor } from './models/Professor';
import { Ajudante } from './models/Ajudante';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RetanguloVerticalComponent, RetanguloHorizontalComponent, DadosQuadradoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urna';
numero1:string='';
numero2:string='';
numero3:string='';
professores: Professor[] = []
ajudantes: Ajudante[] = []
nomeProfessor: string = '';
nomeAjudante:string ='';
tipoVoto: 'PROFESSOR' | 'AJUDANTE' = 'PROFESSOR'




constructor() {
 const professor1 = new Professor('João', '100');
 const professor2 = new Professor('Maria', '200');
const professor3 = new Professor('José', '300');
const ajudante1 = new Ajudante('Ana', '400');
const ajudante2 = new Ajudante('Pedro', '500');
const ajudante3 = new Ajudante('Paula', '600');
this.professores.push(professor1);
this.professores.push(professor2);
this.professores.push(professor3);
this.ajudantes.push(ajudante1);
this.ajudantes.push(ajudante2);
this.ajudantes.push(ajudante3);
}

localizarProfessor(numero: string)
{

const professor = this.professores.find(professor => professor.Numero === numero.toString());
if(professor){
  this.nomeProfessor = professor.Nome;

}
else
{
  console.log('Professor não encontrado');
}
}



localizarAjudante(numero: string) {
const ajudante = this.ajudantes.find(ajudante => ajudante.Numero === numero.toString());
if(ajudante){
  this.nomeAjudante = ajudante.Nome;
}

}


pintarnumeronatela(numerodigitado: string) {
  if (this.numero1 === '') {
    this.numero1 = numerodigitado;
    return;
  }
  if (this.numero2 === '') {
    this.numero2 = numerodigitado;
    return;
  }
  if (this.numero3 === '') {
    this.numero3 = numerodigitado;
this.localizarProfessor(this.numero1 + this.numero2 + this.numero3)
  }
}

onCorrige() {
  this.numero1 = '';
  this.numero2 = '';
  this.numero3 = '';
this.nomeProfessor = '';

}

onConfirma(){
  if (this.nomeProfessor != ''){
  this.tipoVoto = 'AJUDANTE'
  this.onCorrige ()}
}

onBranco(){
  this.tipoVoto = 'AJUDANTE'
  this.onCorrige()
}
}

