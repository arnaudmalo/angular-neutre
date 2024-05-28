import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { IDepartementResponse } from '../../../../shared/models/departement.model';
import { FilterCriteria } from '../../../../shared/models/filterCriteria';

const resourceUrl = environment.apiUrl+"/Departements";
type EntityResponseType = HttpResponse<IDepartementResponse>;
type EntityArrayResponseType = HttpResponse<IDepartementResponse>;
@Injectable({
  providedIn: 'root'
})
export class DepartementService {

    constructor(protected http: HttpClient) { }


    create(departement: IDepartementResponse): Observable<EntityResponseType> {
        return this.http.post<IDepartementResponse>(resourceUrl, departement, { observe: 'response' });
    }

    findAll(): Observable<EntityArrayResponseType> {
        return this.http.get<IDepartementResponse>(resourceUrl+'/all', { observe: 'response' });
    }

    public getAllDepartementWithPaginationCriteria(filterCriteria: FilterCriteria,req: any): Observable<EntityResponseType> {
        let options: HttpParams = new HttpParams();
        Object.keys(req).forEach(
            key => {
                options = options.set(key, req[key]);
            }
        );
        return this.http.post<IDepartementResponse>(resourceUrl+'/criteria', filterCriteria,{ params: options,observe: 'response' });
    }

    getAllDepartementWithPagination(req: any): Observable<EntityArrayResponseType> {
        let options: HttpParams = new HttpParams();
        Object.keys(req).forEach(
            key => {
                options = options.set(key, req[key]);
            }
        );
        return this.http.get<IDepartementResponse>(resourceUrl, { params: options,observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
    }

    update(departement: IDepartementResponse, id: number): Observable<EntityResponseType> {
        return this.http.put<IDepartementResponse>(`${resourceUrl}/${id}`, departement, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDepartementResponse>(`${resourceUrl}/${id}`, { observe: 'response' });
    }
}
