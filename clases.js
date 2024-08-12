class Personas{
    constructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.telefono = []
    };
    
    
    /*conseguirTelefono(){
        return this.telefono;
    };*/

    obtenerTelefono(telefono){
        this.telefono.push(telefono);
    };

    agregarTelefonos(telefonos) {
        telefonos.forEach(telefono => this.obtenerTelefono(telefono));
    }
}


let persona = new Personas("juan", "perez", 18);

persona.agregarTelefonos(["123-456-7890", "987-654-3210"]);
persona.obtenerTelefono(["987-654-3210", "123-456-7890"]);

console.log(persona)
