export class Producto{
    id?:number;
    name:string;
    cantidad: number;

    constructor(nombre: string, cantidad: number){
        this.name = nombre;
        this.cantidad = cantidad;   
    }
}

