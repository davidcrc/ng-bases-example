import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'bases angular';
  numero: number = 0;

  acumular(valor: number) {
    this.numero += valor;
  }
}
