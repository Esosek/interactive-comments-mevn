import { Router } from 'express'

const router = Router()

router.get('', (_, res) => {
  res.json({ message: 'This returns a list of all comments' })
})

router.post('new', (req, res) => {
  console.log(req.body)
  res.json({ message: 'Creating new comment' })
})

export default router
