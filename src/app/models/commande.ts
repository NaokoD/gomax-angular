import { Siege } from '../siege/models/siege';
import { Place } from './place';
import { Snack } from '../snack/models/snack';

export class Commande {
    constructor(
        public id : number,
        public idClient : number,
        public idSeance : number,
        public sieges : Siege[],
        public places : Place[],
        public snacks : Snack[]        
    ) {}
}
