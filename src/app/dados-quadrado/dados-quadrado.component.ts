import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dados-quadrado',
  standalone: true,
  imports: [],
  templateUrl: './dados-quadrado.component.html',
  styleUrl: './dados-quadrado.component.css'
})
export class DadosQuadradoComponent {
@Input() numero:string = '';
}
