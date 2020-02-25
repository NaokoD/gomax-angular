import {Siege} from '../siege/models/siege';
import {Snack} from '../snack/models/snack';
import {Tarif} from './tarif';
import {Seance} from '../seance/models/seance';
import {Client} from './client';

export class Commande {
  id: number;
  client: Client;
  seance: Seance;
  tarifs: Tarif[];
  createdOn: Date;
  sieges: Siege[];
  snacks: Snack[];
  constructor(){
    this.id = null;
    this.client = null;
    this.seance = null;
    this.tarifs = null;
    this.sieges = [];
    this.snacks = null
  }
}
