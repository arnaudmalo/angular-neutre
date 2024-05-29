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

export class AgentModel implements IAgentModel{

    constructor(
      //  public _links?: Links,
        public libelle?: string,
    ){}
  }


  export interface IAgentResponse{
     _embedded?:Embedded
     _links?: IGenericLinks;
     page?: IGenericPage;
     // etat?: boolean;
  }



  interface Embedded {
    content: AgentModel[];
  }

  export class Decret implements Decret{
      constructor(
          public _embedded?: Embedded,
        //  public _links?: Links,
          public page?: IGenericPage,
        //  public etat?: boolean
      ){}
  }
