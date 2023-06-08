import { CommonModule } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';
import { TempCity } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class RootComponent implements OnInit {
  title: string = 'Temperature in Angular ' + VERSION.major;
  cities: Array<TempCity> = [
    new TempCity('Torino', '14'),
    new TempCity('Milano', '15'),
    new TempCity('Genova', '18'),
  ];
  seleziona(name: string) {
    this.selezionata = name;
  }
  selezionata: string | undefined;

  clean() {
    this.selezionata = undefined;
  }

  seleziona2(name: string) {
    var trovato: Array<TempCity> = this.cities.filter(
      (el) => el.nome === name //criterio per la ricerca. Ottengo un array di oggetti
    );
    this.selezione = trovato[0]; //ottengo l’oggetto in prima posizione, che è anche l’unico, le città sono univoche
  }
  selezione: TempCity | undefined;

  clean2() {
    this.selezione = undefined;
  }

  constructor() {}

  ngOnInit() {}
}
