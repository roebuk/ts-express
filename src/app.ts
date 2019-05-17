import * as express from 'express'
import authRoutes from './routes/auth'

const app = express()

app.disable('x-powered-by');

app.set('view engine', 'pug')
app.use('/auth', authRoutes)


export default app
