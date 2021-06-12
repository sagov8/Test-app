import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../Modelo/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

   constructor(private http:HttpClient) { }

  Url='http://localhost:8080/producto/';

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.Url + "lista")
  }
  
  public createProducto(persona: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.Url + 'create', persona);
  }

  public getProductoId(id:number){
    return this.http.get<Producto>(this.Url+"detail/"+id)
  }

  public updateProducto(id: number, persona: Producto): Observable<any> {
    return this.http.put<any>(this.Url + "update/"+ persona.id, persona);
  }

  public deleteProducto(persona: Producto): Observable<any> {
    return this.http.delete<any>(this.Url + "delete/" + persona.id);
  } 
}
