import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/models/tarif';
import { Place } from 'src/app/models/place';
import { TarifService } from 'src/app/services/tarif.service';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.css']
})
export class TarifListComponent implements OnInit {
  places : Place[] = [];
  tarifs : Tarif[];

  displayedColumns: string[] = ['libelle', 'montant', 'moins', 'quantite', 'plus', 'total'];

  constructor(private tarifService: TarifService) {
    
  }

  ngOnInit() {
    this.loadTarifs();
  }

 add(tarif : Tarif): void{
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].idTarif==tarif.id){
        this.places[i].quantite++;
      }
    }
  }
  
  getPlacesByTarif(tarif : Tarif): number{
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].idTarif==tarif.id){
        return this.places[i].quantite;
      };
    };
  };

  drop(tarif : Tarif){
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].idTarif==tarif.id){
        if(this.places[i].quantite >0){
        this.places[i].quantite--;
        //console.log(this.places);
        }
      }
    }
  }
  
  private loadTarifs() : void {
    this.tarifService.getTarifs().
    subscribe({
      next: x => {
        this.tarifs = x;
        console.log(x);
      },
      error: e => console.log(e),
      complete: () => {
        console.log(this.places)
        for(let i of this.tarifs){
          console.log(i);
          this.places.push(
            {quantite : 0, idTarif : i.id}
          );
          console.log(this.places)
        };
        console.log('Oberver got a complete notification')
      }
    });    
  }
}
