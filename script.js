const persona ={
    nombre: "Manuel",
    edad:21,
    carrera:"Ingenieria en computacion"
};

console.log(persona.carrera);

console.log(persona.edad);
persona.edad =22;
console.log(persona.edad);

const estudiantes=[
    {
        nombre: "Manuel",
        edad:21
    },
    {
        nombre: "Miyael",
        edad:19
    },
    {
        nombre:"Melissa",
        edad:22
    }
];

console.log(estudiantes[1].nombre);