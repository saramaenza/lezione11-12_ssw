import { Component, OnInit, VERSION } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempCity } from './city';
import { WeatherService } from './weather.service';
import { AjaxResponse } from 'rxjs/ajax';
import { NotificaComponent } from './notifica/notifica.component';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
  imports: [CommonModule, NotificaComponent],
  providers: [WeatherService],
  standalone: true,
})
export class RootComponent implements OnInit {
  title: string = 'Temperature in Angular ' + VERSION.major;
  cities: Array<string> = ['Torino', 'Milano', 'Genova'];

  seleziona(name: string) {
    this.selezione = new TempCity(name, undefined);
    this.ws.getData(this.selezione.nome).subscribe({
      next: (x: AjaxResponse<any>) =>
        (this.selezione.valore = x.response.main.temp),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
  selezione: TempCity;

  constructor(private ws: WeatherService) {}
  ngOnInit() {}
}
