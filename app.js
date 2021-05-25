
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');



console.clear();

// console.log(process.argv)
// console.log(argv)

// console.log(process.argv);
// const [ , ,arg3] = process.argv;
// const [ , base] = arg3.split('=');
// console.log(base);

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err))

