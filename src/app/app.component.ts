import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RetanguloVerticalComponent } from "./retangulo-vertical/retangulo-vertical.component";
import { RetanguloHorizontalComponent } from "./retangulo-horizontal/retangulo-horizontal.component";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RetanguloVerticalComponent, RetanguloHorizontalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'urna';
  pintarnumeronatela(numerodigitado:string){

    console.log(numerodigitado)
  }
}
