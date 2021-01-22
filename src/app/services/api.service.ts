import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  //Enviando peticiones a la api
  buscar(){
    const url = 'http://127.0.0.1:8000/api/movies';
    return fetch(url).then(response => response.json())
  }

  getData(id:number){
    const url = 'http://127.0.0.1:8000/api/movies/'+id;
    return fetch(url).then(response => response.json())
  }
}
