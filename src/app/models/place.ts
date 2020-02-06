import { Tarif } from './tarif';

export class Place {
    constructor(
        public tarif : Tarif,
        public quantite: number
    ){}
}
