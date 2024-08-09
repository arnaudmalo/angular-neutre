import { IGenericLinks, IGenericPage } from "./generic.model";

export interface IAgentModel{
    id?: number;
    libelle?: string;

    _links?: {
        self: {
            href: string;
        };
    };
}

export class DemandeModel implements IDemandeModel{

    constructor(
        //  public _links?: Links,
        public libelle?: string,
    ){}
}


export interface IDemandeResponse{
    _embedded?:Embedded
    _links?: IGenericLinks;
    page?: IGenericPage;
    // etat?: boolean;
}



interface Embedded {
    content: DemandeModel[];
}

export class Demande implements Demande{
    constructor(
        public _embedded?: Embedded,
        //  public _links?: Links,
        public page?: IGenericPage,
        //  public etat?: boolean
    ){}
}
