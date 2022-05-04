export class Planta{
    id:number;
    nombre:string;
    ubicacion:string;
    descripcion:string;
    imagen:string;
    cuidados:string;
    
    constructor(id:number, nombre:string, ubicacion:string, descripcion:string, imagen:string, cuidados:string){
        this.id=id;
        this.nombre=nombre;
        this.ubicacion=ubicacion;
        this.descripcion=descripcion;
        this.imagen=imagen;
        this.cuidados=cuidados
    }
}