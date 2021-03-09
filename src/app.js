import express from 'express';
import morgan from 'morgan';
const cors = require('cors');
import pkg from '../package.json';


import syncRoutes from './routes/sync.routes';
import authRoutes from './routes/auth.routes';
import statsRoutes from './routes/stats.routes';
import userRoutes from './routes/user.routes';


//inicializa express
const app = express()

//inicializa una variable port para usar un puerto dado por el servicio cloud o uno por defecto
// toma el valor del puerto de la variable de entorno o el puerto 4000
app.set('port', process.env.PORT || 4000);

//crea una variable con los datos importados del package json
app.set('pkg', pkg);

//avilita el uso de json en el server
app.use(express.json());

//con esto ahora permite enviar y resibir datos por http
app.use(cors());

//muestra en la consola todas la peticiones a las rutas
app.use(morgan('dev'));


//ruta inicial por defecto
app.get('/', (req, res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
});

//rutas iniciales
app.use('/api/Sync', syncRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/statistics', statsRoutes);

app.use('/api/users', userRoutes);

export default app;