import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/models/tarif';
import { TarifService } from 'src/app/services/tarif.service';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.css'],
})
export class TarifListComponent implements OnInit {
<<<<<<< HEAD
  tarifs: Tarif[];
  idSeance: number;
=======
  tarifs : Tarif[];
  idSeance : number;
  visible : boolean = true;
>>>>>>> b92c57c5db9030cd2f83046317d090f0ad0b3308

  displayedColumns: string[] = ['libelle', 'montant', 'quantite', 'total'];

  constructor(private route: ActivatedRoute, private tarifService: TarifService, private commandeService: CommandeService) {
    const id: string = this.route.snapshot.params.id;
    this.idSeance = Number(id);
  }

  ngOnInit() {
    if(this.commandeService.commande.tarifs.length > 0){
      this.tarifs = this.commandeService.commande.tarifs;
      this.visible = false;
    }else{
      this.loadTarifs();
    }
  }

<<<<<<< HEAD
  add(id: number): void {
    console.log(id);
    for (let i of this.tarifs) {
      if (i.id === id) {
        if (i.quantite >= 0) {
=======
 add(id : number): void{
    //console.log(id);
    for(let i of this.tarifs){
      if(i.id === id){
        if(i.quantite >= 0){
>>>>>>> b92c57c5db9030cd2f83046317d090f0ad0b3308
          i.quantite++;
        }
      }
    }
  }
<<<<<<< HEAD

  /* getPlacesByTarif(tarif : Tarif): number{
    for(let i:number = 0; i<this.places.length; i++){
      if(this.places[i].tarif.id===tarif.id){
        return this.places[i].quantite;
      };
    };
  }; */

  drop(id: number): void {
    console.log(id);
    for (let i of this.tarifs) {
      if (i.id === id) {
        if (i.quantite > 0) {
=======
  
  drop(id : number) : void {
    //console.log(id);
    for(let i of this.tarifs){
      if(i.id === id){
        if(i.quantite > 0){
>>>>>>> b92c57c5db9030cd2f83046317d090f0ad0b3308
          i.quantite--;
        }
      }
    }
  }
<<<<<<< HEAD

  private loadTarifs(): void {
    this.tarifService.getTarifs()
      .subscribe({
        next: x => {
          this.tarifs = x;
          console.log(x);
        },
        error: e => console.log(e),
        complete: () => {
          for (let i of this.tarifs) {
            i.quantite = 0;
            console.log(i)
          };
          console.log('Oberver got a complete notification')
        }
      });
=======
  
  getTotal() : number {
    console.log(this.tarifs);
    let somme = 0; 
    for(let i of this.tarifs){
      somme+= i.montant*i.quantite;
    }
    return somme;
  }
  
  private loadTarifs() : void {
    this.tarifService.getTarifs()
    .subscribe({
      next: x => {
        this.tarifs = x;
        //console.log(x);
      },
      error: e => console.log(e),
      complete: () => {
        for(let i of this.tarifs){
          i.quantite=0;
          //console.log(i)
        } ;
        console.log('Oberver got a complete notification')
      }
    });    
>>>>>>> b92c57c5db9030cd2f83046317d090f0ad0b3308
  }

  suivant() {
    let places: Tarif[] = [];
    for (let i of this.tarifs) {
      if (i.quantite > 0) {
        places.push(i);
      }
    }
    this.commandeService.commande.idSeance = this.idSeance;
    //console.log(this.idSeance);
    //console.log(this.commandeService.commande.idSeance +' tarif');
    this.commandeService.commande.tarifs = places;
    //console.log(this.commandeService.commande.tarifs +' tarif');
  }
}
