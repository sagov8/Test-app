export class Producto{
    id?:number;
    name:string;
    cantidad: number;
    precio: number;
    estado: string;

    constructor(nombre: string, cantidad: number, precio: number, 
        estado: string){
        this.name = nombre;
        this.cantidad = cantidad;   
        this.precio = precio;
        this.estado = estado;
    }
}

