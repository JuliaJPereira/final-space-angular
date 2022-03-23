
export class Personagens {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
    hair?: string;
    alias?: string[];
    origin?: string;
    abilities?: string[];
    img_url?: string;

    constructor(object: Partial<Personagens>) {
      Object.assign(this, object);
    }
}
