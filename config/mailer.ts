import nodemailer from 'nodemailer'
import { CORREO, PASSWORD } from '../consts/envs'

const transporter = nodemailer.createTransport({
  host: 'smtp.titan.email',
  port: 465,
  secure: true,
  auth: {
    user: CORREO,
    pass: PASSWORD
  }
})
transporter
  .verify()
  .then(() => {
    console.log('listo para enviar email')
  })
  .catch((error) => {
    console.log('error encontrado en nodemailer ', error)
  })
export const transport = transporter
