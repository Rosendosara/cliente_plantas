import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../models/planta.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SPlantasService {
  plantas:Observable<Planta[]>=new Observable();
  constructor(private clienteHttp:HttpClient) {

   }
   getPlantas(): Observable<Planta[]> {
   console.log ("Obteniendo productos del WS"),
   this.plantas = this.clienteHttp.get<Planta[]>("http://localhost:8082/plantas")
   return this.plantas;
  }
}

