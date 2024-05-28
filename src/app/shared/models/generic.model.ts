
export interface IGenericModel {
    id?: number;
    code?: string;
    libelle?: string;
    actif?: boolean;
    
   
    
    
    _links?: {
      self: {
        href: string;
      };
    };
  }

 export interface IGenericLinks {
    self: {
      href: string;
    };
  }

  export interface IGenericPage {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }
