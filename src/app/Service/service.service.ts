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
  
  public createPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.Url + 'create', persona);
  }

  public getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"detail/"+id)
  }

  public updatePersona(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.Url + "update/"+ persona.id, persona);
  }

  public deletePersona(persona: Persona): Observable<any> {
    return this.http.delete<any>(this.Url + "delete/" + persona.id);
  } 
}
