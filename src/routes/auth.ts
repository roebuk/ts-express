import * as express from 'express'
import { Request, Response } from 'express'


const router = express.Router()

router.get('/login', (req: Request, res: Response) => {
  res.render('index', { title: 'Login', message: 'Login' })
})

router.get('/register', (req: Request, res: Response) => {
  res.render('index', { title: 'Reg', message: 'Reg' })
})


export default router
