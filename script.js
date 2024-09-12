
const ph = 60000;
const magister = 50000;
const especialista = 40000;
const profesional = 30000;

const bono1 = 0.3;
const bono2 = 0.5;
const bono3 = 0.6;
const bono4 = 0.9;

let respuesta, categoria, valorHoras, bonificacion, neto, total;

let AcumProfe = 0; let acumPh = 0; let acumMa = 0; let acumEs = 0; let acumPf = 0;
let acumNominaPh = 0; let acumNominaMa = 0; let acumNominaEs = 0; let acumNominaPf = 0;

respuesta = parseInt(prompt("Desea calcular el pago de un docente?\n1.Si\n2.No"))

while(respuesta === 1){
    let nombre = prompt("Cual es su nombre: ");
    let horas = parseInt(prompt("Cuantas horas ha trabajado en la quincena: "));
    let annos = parseInt(prompt("Cuantos años lleva en la empresa: "));
    let categoria = parseInt(prompt("Cual es su nivel educativo?\n1.Ph\n2.Magister\n3.Especialista\n4.Profesional"))

    switch(categoria){
        case 1:
            valorHoras = horas * ph;
            acumPh++
            break;
        case 2:
            valorHoras = horas * magister;
            acumMa++
            break;
        case 3:
            valorHoras = horas * especialista;
            acumEs++
            break;
        case 4:
            valorHoras = horas * profesional;
            acumPf++
            break;
    }

    if(annos < 2){
        bonificacion = valorHoras * bono1;
        console.log(bonificacion)
        neto = valorHoras + bonificacion;
    }else if(annos >=2 && annos <5){
        bonificacion = valorHoras * bono2;
        neto = valorHoras + bonificacion;
    }else if(annos >= 5 && annos < 10){
        bonificacion = valorHoras * bono3;
        neto = valorHoras + bonificacion;
    }else{
        bonificacion = valorHoras * bono4;
        neto = valorHoras + bonificacion;
    }

    switch(categoria){
        case 1:
            acumNominaPh += neto
            break;
        case 2:
            acumNominaMa += neto
            break;
        case 3:
            acumNominaEs += neto
            break;
        case 4:
            acumNominaPf += neto
    }


    AcumProfe++
    total = acumNominaPh + acumNominaMa + acumNominaEs + acumNominaPf;

    console.log(`┌──────────────────────────────────────────────────┐<br>`);
    console.log(`│                  Colilla Profe                   │<br>`);
    console.log(`└──────────────────────────────────────────────────┘<br>`);

    console.log(`Nombre docente: ${nombre}`)
    console.log(`Categoria del docente: ${categoria}`);
    console.log(`Años trabajados: ${annos}`)
    console.log(`Horas trabajadas: ${horas}`);
    console.log(`Valor de horas trabajadas: ${valorHoras}`);
    console.log(`Valor de bonificacion: ${bonificacion}`);
    console.log(`El neto a pagar es: ${neto}`);

    respuesta = parseInt(prompt("Desea calcular el pago de un docente?\n1.Si\n2.No"))

}


    console.log(`┌──────────────────────────────────────────────────┐<br>`);
    console.log(`│                Gastos Totales                    │<br>`);
    console.log(`└──────────────────────────────────────────────────┘<br>`);

    console.log(`Cantidad de personas PH: ${acumPh}`);
    console.log(`Cantidad de personas Magister: ${acumMa}`);
    console.log(`Cantidad de personas Especialistas: ${acumEs}`);
    console.log(`Cantidad de personas Profesionales: ${acumNominaPf}`);
    console.log(`Suma de nomina de PH: ${acumNominaPh} `);
    console.log(`Suma de nomina de Magister: ${acumNominaMa}`);
    console.log(`Suma de nomina de Especialista: ${acumNominaEs}`);
    console.log(`Suma de nomina de Profesional: ${acumNominaPf}`);
    console.log(`Total de nomina de la U: ${total}`);

