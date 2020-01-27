import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/models/tarif';
import { Place } from 'src/app/models/place';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.css']
})
export class TarifListComponent implements OnInit {
  places : Place[];
  
  tarifs : Tarif[] = [
    {id:1, libelle : 'Normal', montant:12},
    {id:2, libelle : 'Reduit', montant:6}
  ];

  displayedColumns: string[] = ['libelle', 'montant', 'moins', 'quantite', 'plus', 'total'];

  constructor() {
    
  }

  ngOnInit() {
    this.places = [
      {quantite:0, idTarif:1},
      {quantite:0, idTarif:2}
    ]
  }

  private add(id:number): void{
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].idTarif==id){
        this.places[i].quantite++;
        //console.log(this.places);
      }
    }
  }
  
  private getPlacesByTarif(id : number): number{
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].idTarif==id){
        return this.places[i].quantite;
      };
    };
  };

  private drop(id:number){
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].idTarif==id){
        if(this.places[i].quantite >0){
        this.places[i].quantite--;
        //console.log(this.places);
        }
      }
    }
  } 

}
