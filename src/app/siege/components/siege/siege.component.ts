import {Component, OnInit, Input} from '@angular/core';
import {Siege} from '../../models/siege';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-siege',
  templateUrl: './siege.component.html',
  styleUrls: ['./siege.component.css']
})
export class SiegeComponent implements OnInit {
  @Input()
  siege: Siege;

  constructor(private commandeService : CommandeService) {
  }

  ngOnInit() {
    if(this.siege.type !== "none"){
      this.siege.available = true;
      if(this.commandeService.commande.seance !== null){
        if(this.commandeService.siegesUsed.includes(Number(this.siege.id)))
        {
          this.siege.available = false;
        }
      }
    }
  }

  toggleAvailability(siege: Siege): void {
    let indexSiege : number = this.checkSelectedSiege(this.commandeService.commande.sieges, siege.id);
    if (siege.available === true) {
      if(indexSiege === -1){
        this.commandeService.commande.sieges.push(new Siege(siege.id));
      }
      siege.available = null;
    } else if (siege.available === null) {
      if(indexSiege!==-1){
        this.commandeService.commande.sieges.splice(indexSiege,1);
      }
      siege.available = true;
    }

  }

  checkSelectedSiege(sieges : Siege[], id : number) : number {
    for (let i : number = 0; i <sieges.length; i++) {
      if(sieges[i].id===id){
        return i;
      }      
    }
    return -1;
  }
}
