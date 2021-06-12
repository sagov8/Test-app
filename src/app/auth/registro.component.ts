import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../Modelo/nuevo-usuario';
import { AuthService } from '../Service/auth.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  nuevoUsuario: NuevoUsuario;
  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;
  errMsj: string;
  isLogged: boolean;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );
    this.authService.nuevo(this.nuevoUsuario).subscribe((data) => {});

    this.router.navigate(['/login']);
  }
}
