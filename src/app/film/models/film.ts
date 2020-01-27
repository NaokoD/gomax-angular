export class Film {
    constructor(
        public id: number,
        public titre: string,
        public categorie: string,
        public duree: number,
        public urlImg: string,
        public resume: string
    ) { }
}
