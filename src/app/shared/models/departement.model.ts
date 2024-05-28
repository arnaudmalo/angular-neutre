import {IGenericLinks, IGenericPage} from "./generic.model";

export interface IDepartementModel{
    id?: number;
    libelle?: string;
    sigle?: string;

    _links?: {
        self: {
            href: string;
        };
    };
}

export class DepartementModel implements IDepartementModel{
    constructor(
        public id?: number,
        public libelle?: string,
        public sigle?: string,
    ){}
}


export interface IDepartementResponse{
    _embedded?:Embedded
    _links?: IGenericLinks;
    page?: IGenericPage;
}



interface Embedded {
    content: DepartementModel[];
}
export class Departement implements Departement{
    constructor(
        public _embedded?: Embedded,
        public page?: IGenericPage,
    ){}
}
