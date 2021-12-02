import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [],
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 20000 },
    { nombre: 'Vegete', poder: 2000 },
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregarNuevoPersonaje(personaje: Personaje) {
    this.personajes.push(personaje);
  }
}
