const persona = {
    edad :30,
    nombre :'Juanito',
    talla : 39,
    estadoCivil : 'Soltero',

    calcularEdad: function(){
        console.log("Calculando la edad");
    },
}
const computadora ={
    cpu : 'core i7',
    marca :'Asus',
    nuevo : true,
    mostarDetalle: function(){
        console.log("marca", this.marca);
    },
}

const alumno={
    nombre:"Juanito",
    notas:[10,5,8,9],
    crusos:["HTML","CSS","JS","REACT"],
}
console.log("Notas", alumno.notas);

const alumnos =[
    {
        nombre: "Luciano",
        edad: 18
    },
    {
        nombre: "Pepe",
        edad: 21
    },
    {
        nombre: "Juan",
        edad: 28
    }
]

const laptops = [
    {
    img :"https:mac.logo",
    nombre:"Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
    clasificacion: 5,
    caracteristicas:{
        procesador : "M1 Pro de 10 núcleos",
        ram : 16,
        pantalla : "Liquid Retina XDR de 16,2  3456 x 2234",
    }},
    {
        img :"https:mac.logo",
        nombre:"Apple MacBook Pro de 16,2 con chip M1 Pro (finales de 2021, plateado)",
        clasificacion: 5,
        caracteristicas:{
            procesador : "M1 Pro de 10 núcleos",
            ram : 16,
            pantalla : "Liquid Retina XDR de 16,2  3456 x 2234",
        }},
        {
            img :"https:mac.logo",
            nombre:"Apple MacBook Pro de 16,2  con chip M1 Pro (finales de 2021, gray)",
            clasificacion: 4,
            caracteristicas:{
                procesador : "M1 Pro de 10 núcleos",
                ram : 16,
                pantalla : "Liquid Retina XDR de 16,2  3456 x 2234",
            }}
]