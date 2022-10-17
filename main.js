//Creación del objeto
class Animal {
    constructor(nombre, dueña, raza, edad, actividades, comida, visitaVete, vacunas) {
        this.nombre = nombre;
        this.dueña = dueña;
        this.raza = raza;
        this.edad = edad;
        this.actividades = actividades;
        this.comida = comida;
        this.visitaVete = visitaVete;
        this.vacunas = vacunas;
    }
};

//En consola
let china = new Animal("China", "Gisela Flores", "Romano", 2, "dormir en su silloncito", "Wiskas", { Día: "28", Mes: "septiembre", Horario: "15:00 hs" }, { Vacuna_A: true, Vacuna_B: true, Vacuna_C: false });
console.log(china);

//En el HTML
document.querySelector("ul").innerHTML = `Nombre: ${china.nombre} </br> Dueña: ${china.dueña} </br> Raza: ${china.raza} </br> Edad: ${china.edad} </br> Actividades: ${china.actividades} </br> Comida: ${china.comida} </br> Visita al veterinario: ${china.veterinario} </br> Vacunas: ${china.vacunas}`;

