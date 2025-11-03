class alumno{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre(){
        return this.nombre;
    }

    getApellido(){
        return this.apellido;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setApellido(apellido){
        this.apellido = apellido;
    }

}