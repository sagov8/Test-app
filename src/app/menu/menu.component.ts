import { Component, OnInit } from '@angular/core';
import { TokenService } from '../Service/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged: boolean;

  constructor(private tokenService: TokenService) { }

  ngOnInit(){
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload;
  }

}
