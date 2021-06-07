import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../Modelo/jwt-dto';
import { LoginUsuario } from '../Modelo/login-usuario';
import { NuevoUsuario } from '../Modelo/nuevo-usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authUrl + 'login', loginUsuario);
  }
}
