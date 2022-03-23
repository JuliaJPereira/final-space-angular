import { Personagens } from './../models/personagens-todos.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceService {

  constructor(private http: HttpClient) { }

  getListPersonagens(){
    let url:string = `${environment.urlBase}/character`;
    return this.http.get<Personagens[]>(url);
  }

  getPersonagemByNameOrId(nameOrId: string){
    let url:string = `${environment.urlBase}/character/${nameOrId}/`;

    return this.http.get<Personagens>(url);
  }
}
