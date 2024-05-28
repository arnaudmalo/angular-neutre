import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { FilterCriteria } from '../../../../shared/models/filterCriteria';
import { IRoleResponse } from '../../../../shared/models/role.model';

const resourceUrl = environment.apiUrl+"/Roles";
type EntityResponseType = HttpResponse<IRoleResponse>;
type EntityArrayResponseType = HttpResponse<IRoleResponse>;
@Injectable({
  providedIn: 'root'
})
export class RoleService {

    constructor(protected http: HttpClient) { }


    create(profil: IRoleResponse): Observable<EntityResponseType> {
        return this.http.post<IRoleResponse>(resourceUrl, profil, { observe: 'response' });
    }

    findAll(): Observable<EntityArrayResponseType> {
        return this.http.get<IRoleResponse>(resourceUrl+'/all', { observe: 'response' });
    }

    public getAllRoleWithPaginationCriteria(filterCriteria: FilterCriteria,req: any): Observable<EntityResponseType> {
        let options: HttpParams = new HttpParams();
        Object.keys(req).forEach(
            key => {
                options = options.set(key, req[key]);
            }
        );
        return this.http.post<IRoleResponse>(resourceUrl+'/criteria', filterCriteria,{ params: options,observe: 'response' });
    }

    getAllRoleWithPagination(req: any): Observable<EntityArrayResponseType> {
        let options: HttpParams = new HttpParams();
        Object.keys(req).forEach(
            key => {
                options = options.set(key, req[key]);
            }
        );
        return this.http.get<IRoleResponse>(resourceUrl, { params: options,observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<{}>> {
        return this.http.delete(`${resourceUrl}/${id}`, { observe: 'response' });
    }

    update(profil: IRoleResponse, id: number): Observable<EntityResponseType> {
        return this.http.put<IRoleResponse>(`${resourceUrl}/${id}`, profil, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IRoleResponse>(`${resourceUrl}/${id}`, { observe: 'response' });
    }
}
