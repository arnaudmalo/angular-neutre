import { IGenericLinks, IGenericPage } from "./generic.model";

export interface IRoleModel{
    id?: number;
    libelle?: string;

    _links?: {
        self: {
            href: string;
        };
    };
}

export class RoleModel implements IRoleModel{

    constructor(
      //  public _links?: Links,
        public libelle?: string,
    ){}
  }
  
  
  export interface IRoleResponse{
     _embedded?:Embedded
     _links?: IGenericLinks;
     page?: IGenericPage;
     // etat?: boolean;
  }
  
  
  
  interface Embedded {
    content: RoleModel[];
  }

  export class Role implements Role{
      constructor(
          public _embedded?: Embedded,
        //  public _links?: Links,
          public page?: IGenericPage,
        //  public etat?: boolean
      ){}
  }
  