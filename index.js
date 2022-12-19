const { escribir, recuperar } = require('./operaciones.js');

const contenidos = process.argv.slice(2);

const petNombre = contenidos[1];
const petEdad = contenidos[2];
const petTipo = contenidos[3];
const petColor = contenidos[4];
const petSintomas = contenidos[5];

if (contenidos[0] !== 'escribir' && contenidos[0] !== 'recuperar') {
    console.log("Por favor ingrese la función: escribir o recuperar.")
    return
} else if (contenidos[0] === 'escribir' && contenidos.length === 6) {
    if (isNaN(petEdad)) {
        console.log("por favor ingresa un valor numérico")
    } else {
        escribir(petNombre, petEdad, petTipo, petColor, petSintomas);
        console.log('Cita correctamente registrada')
    }
} else if (contenidos[0] === 'escribir' && contenidos.length === 6) {
    if (petNombre === undefined) {
        console.log("por favor ingrese el nombre de la mascota")
    } else {
        escribir(petNombre, petEdad, petTipo, petColor, petSintomas);
        console.log('Cita correctamente registrada')
    }
} else if (contenidos[0] === 'escribir' && contenidos.length === 6) {
    if (petTipo === undefined) {
        console.log("por favor ingrese el tipo de mascota")
    } else {
        escribir(petNombre, petEdad, petTipo, petColor, petSintomas);
        console.log('Cita correctamente registrada')
    }
} else if (contenidos[0] === 'escribir' && contenidos.length === 6) {
    if (petColor === undefined) {
        console.log("por favor ingrese el color de su mascota")
    } else {
        escribir(petNombre, petEdad, petTipo, petColor, petSintomas);
        console.log('Cita correctamente registrada')
    }
} else if (contenidos[0] === 'escribir' && contenidos.length === 6) {
    if (petSintomas === undefined) {
        console.log("por favor ingrese síntomas su mascota")
    } else {
        escribir(petNombre, petEdad, petTipo, petColor, petSintomas);
        console.log('Cita correctamente registrada')
    }
} else if (contenidos[0].toLowerCase() === "escribir") {
    escribir(petNombre, petEdad, petTipo, petColor, petSintomas);
    console.log('Cita correctamente registrada')
} else if (contenidos[0].toLowerCase() === "recuperar") {

    recuperar();
} else {
    console.log("Ups, ocurrió un error. Por favor intenta nuevamente")
}