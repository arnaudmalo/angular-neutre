import { IGenericLinks, IGenericPage } from "./generic.model";

export interface IDecretModel{
    id?: number;
    libelle?: string;

    _links?: {
        self: {
            href: string;
        };
    };
}

export class DecretModel implements IDecretModel{

    constructor(
      //  public _links?: Links,
        public libelle?: string,
    ){}
  }
  
  
  export interface IDecretResponse{
     _embedded?:Embedded
     _links?: IGenericLinks;
     page?: IGenericPage;
     // etat?: boolean;
  }
  
  
  
  interface Embedded {
    content: DecretModel[];
  }

  export class Decret implements Decret{
      constructor(
          public _embedded?: Embedded,
        //  public _links?: Links,
          public page?: IGenericPage,
        //  public etat?: boolean
      ){}
  }
  