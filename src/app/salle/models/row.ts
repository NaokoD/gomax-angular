import { Siege } from 'src/app/siege/models/siege';

export class Row {
    constructor(
        public id: string,
        public sieges: Siege[]
    ) {}
}
