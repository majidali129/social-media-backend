import express from 'express'
import cookieParser from 'cookie-parser';
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'
import { config } from './config/env';
import { appRotuer } from './routes/index';
// import { config } from './config/env';

const corsOptions: CorsOptions = {
    origin: (origin, cb) => {}
}

const app = express();

console.log('hi there');


(() => {

    // GLOBAL MIDDLEWARE REGISTERING
    app.use(express.json())
        .use(express.urlencoded({ extended: true }))
        .use(cookieParser())
        .use(cors(corsOptions))
        .use(morgan('dev'))
    
    // APP ROUTES 
    app.use(appRotuer)

    app.listen(config.PORT, () => {
        console.log(`App is listening at port: ${config.PORT}`);
    })
})()