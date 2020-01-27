import { Siege } from 'src/app/siege/models/siege';

export class Salle {
    constructor(
        public id: number,
        public plan: string,
        public numero: number,
        public sieges: Siege[]
    ){}
}
