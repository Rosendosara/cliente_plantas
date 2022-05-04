import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta.model';
import { SPlantasService } from 'src/app/services/s-plantas.service';

@Component({
  selector: 'app-listado-plantas',
  templateUrl: './listado-plantas.component.html',
  styleUrls: ['./listado-plantas.component.css']
})
export class ListadoPlantasComponent implements OnInit {
  plantas:Planta[]= new Array<Planta>();
  constructor(private servicioPlantas:SPlantasService) { 
    
   }

  ngOnInit(): void {
    this.servicioPlantas.getPlantas().subscribe(
      plantas=> {
        this.plantas = plantas;
      })
  }

}
