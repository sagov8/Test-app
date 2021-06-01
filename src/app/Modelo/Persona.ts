export class Persona{
    id?:number;
    name:string;
    apellidos:string;

    constructor(nombre: string, apellidos: string){
        this.name = nombre;
        this.apellidos = apellidos;   
    }
}

