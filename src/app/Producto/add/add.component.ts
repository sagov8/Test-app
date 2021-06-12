import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { ProductoService } from 'src/app/Service/producto.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private service: ProductoService, private router: Router) {}
  producto: Producto;
  ngOnInit(): void {}

  prepareToSave(name: string, cantidad: number, precio: number,
     estado: string) {
    this.producto = new Producto(name, cantidad, precio, estado);
    this.Guardar(this.producto);
  }

  Guardar(producto: Producto) {
    this.service.createProducto(producto).subscribe((data) => {
      alert('Se agregó con éxito');
      this.router.navigate(['listar']);
    });
  }
}
