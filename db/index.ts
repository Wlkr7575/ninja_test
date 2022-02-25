import nc from 'next-connect'
import bodyParser from 'body-parser'
import connectDb from './connectDb'
connectDb()
const handler = nc()
export default handler