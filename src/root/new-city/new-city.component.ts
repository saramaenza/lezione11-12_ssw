import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newcity',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class NewcityComponent implements OnInit {
  @Output() newCityEvent = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}
  newCity() {
    var input: HTMLInputElement = document.getElementById(
      'nuovo'
    ) as HTMLInputElement;
    var newName = input.value;
    this.newCityEvent.emit(newName);
    input.value = '';
  }
}
