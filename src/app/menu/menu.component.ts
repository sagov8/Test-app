import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../Service/producto.service';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean = false;
  roles: string[];
  isAdmin: boolean = false;

  constructor(
    private service: ProductoService,
    private tokenService: TokenService,
    private router: Router
    
    ) { }

  ngOnInit(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
