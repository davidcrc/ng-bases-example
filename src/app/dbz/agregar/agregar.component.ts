import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: [],
})
export class AgregarComponent {
  @Output()
  onNuevopersonaje: EventEmitter<Personaje> = new EventEmitter();

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) return;

    console.log(this.nuevo);

    // this.personajes.push(this.nuevo);
    this.onNuevopersonaje.emit(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }
}
