import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder requiere de una gran responsabilidad.',
    autor: 'Ben Parker.',
  };

  products: string[] = [
    'Toña',
    'Victoria Clásica',
    'Victoria Frost',
    'Miller Light',
    'Otros',
  ];
}
