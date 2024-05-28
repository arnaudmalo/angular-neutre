export interface IFilterCriteria {
    code?: number;
    libelle?: string;
}

export class FilterCriteria implements IFilterCriteria {
    constructor(
        public code?: number,
        public libelle?: string,
    ){}
}
