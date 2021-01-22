import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger } from '@angular/animations';
import {ApiService} from './../../services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  animations: [
    trigger('animacion1', [
      transition('all', [
        animate('0.4s ease-in-out')
      ]),
    ]),
    trigger('animacion2', [
      transition('all', [
        animate('0.4s linear')
      ]),
    ]),
    trigger('animacion3', [
      transition('all', [
        animate('0.2s ease-in-out')
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  peliculas:any;
  p: number = 1;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.buscar().then(data => {
      this.peliculas=data
    });
  }

}
