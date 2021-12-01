import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: [],
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'ironman', 'hulk'];
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() ?? '';
    console.log('borrando...', this.heroeBorrado);
  }
}
