import { Siege } from '../siege/models/siege';
import { Snack } from '../snack/models/snack';
import { Tarif } from './tarif';

export class Commande {
    constructor(
        public id : number,
        public idClient : number,
        public idSeance : number,
        public tarifs : Tarif[],
        public createdOn : Date,
        public sieges? : Siege[],
        public snacks? : Snack[]      
    ) {}
}
