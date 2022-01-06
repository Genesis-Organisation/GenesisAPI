import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import history from 'connect-history-api-fallback'

import config from '@/config/server'
import limiter from './config/limiter'
import cors from 'cors'

const json = express.json()
const urlencoded = express.urlencoded({ extended: true })

const middlewares = [
  json,
  urlencoded,
  cookieParser(),
  cors(),
  history(),
  helmet(),
  limiter,
]

config.mode == 'DEV' && middlewares.push(morgan('dev'))

export default middlewares
