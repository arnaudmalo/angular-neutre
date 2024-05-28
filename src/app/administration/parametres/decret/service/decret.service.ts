import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { FilterCriteria } from '../../../../shared/models/filterCriteria';
import { IDecretResponse } from '../../../../shared/models/decret.model';

const resourceUrl = environment.apiUrl+"/Decrets";
type EntityResponseType = HttpResponse<IDecretResponse>;
type EntityArrayResponseType = HttpResponse<IDecretResponse>;
@Injectable({
  providedIn: 'root'
})
export class DecretService {

    constructor(protected http: HttpClient) { }


    create(departement: IDecretResponse): Observable<EntityResponseType> {
        return this.http.post<IDecretResponse>(resourceUrl, departement, { observe: 'response' });
    }

    findAll(): Observable<EntityArrayResponseType> {
        return this.http.get<IDecretResponse>(resourceUrl+'/all', { observe: 'response' });
    }

    public getAllDecretWithPaginationCriteria(filterCriteria: FilterCriteria,req: any): Observable<EntityResponseType> {
        let options: HttpParams = new HttpParams();
        Object.keys(req).forEach(
            key => {
                options = options.set(key, req[key]);
            }
        );
        return this.http.post<IDecretResponse>(resourceUrl+'/criteria', filterCriteria,{ params: options,observe: 'response' });
    }

    getAllDecretWithPagination(req: any): Observable<EntityArrayResponseType> {
        let options: HttpParams = new HttpParams();
        Object.keys(req).forEach(
            key => {
                options = options.set(key, req[key]);
            }
        );
        return this.http.get<IDecretResponse>(resourceUrl, { params: options,observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
    }

    update(departement: IDecretResponse, id: number): Observable<EntityResponseType> {
        return this.http.put<IDecretResponse>(`${resourceUrl}/${id}`, departement, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IDecretResponse>(`${resourceUrl}/${id}`, { observe: 'response' });
    }
}
