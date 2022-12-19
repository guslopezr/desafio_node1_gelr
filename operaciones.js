const fs = require('fs');
// falta el const de citas

const escribir = (petNombre, petEdad, petTipo, petColor, petSintomas) => {
    try {

        let object = {
            nombre: petNombre,
            edad: petEdad,
            tipo: petTipo,
            color: petColor,
            sintomas: petSintomas
        };

        let file = JSON.parse(fs.readFileSync('citas.json'))
        file.push(object);
        fs.writeFileSync('citas.json', JSON.stringify(file, null, ' '));
        console.log('Información registrada con éxito');
    } catch (err) {
        return err;
    }
}

const recuperar = () => {

    const contenido = fs.readFileSync('citas.json', 'utf-8');
    const recuperarCitas = JSON.parse(contenido);

    if (recuperarCitas === 0) {
        console.log('Aún no se ha agendado cita');
    } else {
        recuperarCitas.map((cita) => {
            for (let i = 0; i < Object.keys(recuperarCitas[0]).length; i++) {
                console.log(Object.keys(cita)[i] + ': ', Object.values(cita)[i]);
            }

        })
        console.log(`la cantidad total de citas es: ${recuperarCitas.length}`);
    }
}

module.exports = {
    escribir,
    recuperar
};

//Notas de aprendizaje:
// i se usa para contar , es una convención
//i++ es para aumentar de 1 en 1