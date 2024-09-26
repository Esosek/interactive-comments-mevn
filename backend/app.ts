import express, { json } from 'express'

import commentRoutes from './routes/commentRoutes'

const app = express()

app.use(json({ type: 'POST' }))
app.use('/comments/', commentRoutes)

app.get('/', (_, res) => {
  res.send('Okay')
})

app.listen('5001')
