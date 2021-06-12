import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { TokenService } from 'src/app/Service/token.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos:Producto[];
  roles: string[];
  isAdmin: boolean = false;

  constructor(
    private service:ProductoService, private router:Router,
    private tokenService: TokenService

    ) { }

  ngOnInit() {
    
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    });  
  }

  cargarProductos(): void {
    this.service.getProductos().subscribe(
      data => {
        this.productos = data;
      });
  }

  Editar(producto: Producto){
    localStorage.setItem("id", producto.id!.toString());
    this.router.navigate(["edit"]);
  }

  Delete(producto: Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      alert("Producto eliminado");
    })
  }
  

}
