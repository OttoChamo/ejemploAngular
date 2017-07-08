import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben parker'
  }

  personajes: string[] = ['Spiderman', 'Venom',
    'Dr. Octopus', 'Mama', 'ElChino'];

  mostrar: false;

  

}