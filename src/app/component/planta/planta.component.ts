import { Component, Input, OnInit } from '@angular/core';
import { Planta } from 'src/app/models/planta.model';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  @Input() planta:Planta = new Planta(0,"","","","","",);

  constructor() { }

  ngOnInit(): void {
  }

}
