//importa el modulo para las variables de entorno, importa las variables del archivo .env
//antes de que inicie todo importa las variables
require('dotenv').config()


//permite usar caracteristicas modernas de es6
import '@babel/polyfill';

//importa el app que inicializa la applicacion
import app from './app';

//importa el la coneccion de la base de datos
import './database';


async function main(){
    await app.listen(app.get('port'));
    console.log('server listen  on port ', app.get('port'));
}

main();