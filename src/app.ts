import express, { Request, Response } from 'express'
import { Application } from 'express'
import cors from 'cors'

const app: Application = express()

app.use(cors())

// Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing
app.get('/', (req: Request, res: Response) => {
  res.send("Look mama! I'm creating a mid level project using TypeScript")
})

export default app
