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
      console.log(this.commandeService.siegesUsed);
      if(this.commandeService.commande.seance !== null){
        if(this.commandeService.siegesUsed.includes(Number(this.siege.id)))
        {
          this.siege.available = false;
          console.log(this.siege);
        }
      }
    }
  }

  toggleAvailability(siege: Siege): void {
    console.log(siege.id);
    if (siege.available === true) {
      siege.available = null;
      this.commandeService.commande.sieges.push(new Siege(siege.id));
      console.log(this.commandeService.commande.sieges);
    } else if (siege.available === null) {
      siege.available = true;
      console.log(this.commandeService.commande.sieges.includes(siege));
      this.commandeService.commande.sieges.splice(this.commandeService.commande.sieges.indexOf(siege),1);
      console.log(this.commandeService.commande.sieges);
    }
  }

}
