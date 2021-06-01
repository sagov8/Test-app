import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   constructor(private http:HttpClient) { }

  Url='http://localhost:8080/personas/';

  public getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url + "lista")
  }
  
  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.Url + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Persona> {
    return this.http.get<Persona>(this.Url + `detailname/${nombre}`);
  }

  public save(persona: Persona): Observable<any> {
    return this.http.post<any>(this.Url + 'create', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.Url + `update/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.Url + `delete/${id}`);
  } 
}
