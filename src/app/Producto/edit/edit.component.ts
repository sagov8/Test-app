import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Service/producto.service';
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  producto :Producto=new Producto("", 0);
  constructor(private router:Router,private service:ProductoService) { }

  ngOnInit() { 
    this.Editar();
  }
   
  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProductoId(+id!).
    subscribe(data=>{
      this.producto=data
    })
  }

  Actualizar(producto: Producto){
    this.service.updateProducto(producto.id!, producto).
    subscribe(data=>{
      this.producto=data;
      alert("Se actualizó correctamente");
      this.router.navigate(["listar"]);
    })
    
  }

}

