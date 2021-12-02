import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  constructor() {
    console.log('runiing service dbz');
  }

  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 20000 },
    { nombre: 'Vegete', poder: 2000 },
  ];

  get personajes(): Personaje[] {
    // para no retornar la referencia, sino un objeto nuevo
    return [...this._personajes];
  }
}
