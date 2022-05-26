import express from 'express'
const app = express()
import path from 'path'
import dotenv from 'dotenv'
dotenv.config();
import 'express-async-errors'
import morgan from 'morgan'
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);


const __dirname = path.dirname(__filename);

//connecting to database
import connectDB from './db/connect-db.js';
const connectionString = process.env.MONGO_URL

//routes
import authRouter from './routes/auth-routes.js'
import transactionRouter from './routes/transaction-routes.js'
import imageUploadRouter from './routes/add-Image.js'
//middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import auth from './middleware/auth.js';

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}

app.use(express.json({limit : '50mb'}))
app.use(express.urlencoded({limit : '50mb', extended : true}))
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/trans', auth, transactionRouter)
app.use('/api/v1', auth, imageUploadRouter)


//middlewares for handling  errors
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000

const start = async () => {
    try {
        await connectDB(connectionString);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start();