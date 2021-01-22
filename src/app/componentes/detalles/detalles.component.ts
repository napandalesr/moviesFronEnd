import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ApiService} from './../../services/api.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.sass']
})
export class DetallesComponent implements OnInit {
  peliculas:any;

  constructor(private ruta:ActivatedRoute,private api:ApiService) { }

  ngOnInit() {
    this.ruta.params.subscribe(params =>{
      this.api.getData(params['id']).then(data => {
      this.peliculas=data
    })
    })
  }

}
