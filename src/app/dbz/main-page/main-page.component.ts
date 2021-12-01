import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 20000 },
    { nombre: 'Vegete', poder: 2000 },
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;

    console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
