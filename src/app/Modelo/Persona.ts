export class Persona{
    id?:number;
    name:string;
    apellidos:string;

    constructor(nombre: string, apellido: string){
        this.name = nombre;
        this.apellidos = apellido;   
    }
}

