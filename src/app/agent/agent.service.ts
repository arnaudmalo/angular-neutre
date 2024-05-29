import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Agent } from './agent';

@Injectable({
    providedIn: 'root'
})
export class AgentService {

    private baseURL = "http://localhost:8080/v1/agent";

    constructor(private httpClient: HttpClient) { }

    getAgentsList(): Observable<Agent[]>{
        return this.httpClient.get<Agent[]>(`${this.baseURL}`);
    }

    createAgent(agent: Agent): Observable<Object>{
        return this.httpClient.post(`${this.baseURL}`, agent);
    }

    getAgentById(id: number): Observable<Agent>{
        return this.httpClient.get<Agent>(`${this.baseURL}/${id}`);
    }

    updateAgent(id: number, agent: Agent): Observable<Object>{
        return this.httpClient.put(`${this.baseURL}/${id}`, agent);
    }

    deleteAgent(id: number): Observable<Object>{
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
