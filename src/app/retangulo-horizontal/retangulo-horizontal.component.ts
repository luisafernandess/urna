import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-retangulo-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './retangulo-horizontal.component.html',
  styleUrl: './retangulo-horizontal.component.css'
})
export class RetanguloHorizontalComponent {
@Output() corrige = new EventEmitter<void>();
@Output () confirma = new EventEmitter <void>();
@Output() branco =new EventEmitter <void>();
onCorrige(){
  this.corrige.emit();
}
 onConfirma (){
  this.confirma.emit();
 }
onBranco(){
  this.branco.emit();
}
}
