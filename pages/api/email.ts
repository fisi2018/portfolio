import { NextApiRequest, NextApiResponse } from 'next'
import { transport } from '../../config/mailer'
import { EMAIL } from '../../consts/envs'
const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, subject, message, email } = req.body
  try {
    const info = await transport.sendMail({
      from: '"Prysmo Solutions" <contacto@prysmosolutions.com>',
      to: EMAIL,
      subject: `Mensaje de Portfolio, ${subject}`,
      html: `
                <ul>
                    <li>
                    <p>Nombres: ${name}</p>
                    </li>
                    <li>
                    <p>Asunto: ${subject}</p>
                    </li>
                    <li>
                    <p>Mensaje: ${message}</p>
                    </li>
                    <li>
                    <p>Email: ${email}</p>
                    </li>
                </ul>
            `
    })
    if (info.err)
      return res
        .status(500)
        .send({ message: 'Error ocurrido al enviar emails' })
    return res.status(200).send({
      message: 'Email enviado correctamente'
    })
  } catch (err) {
    console.log('error catch ', err)
    return res.status(500).send({
      message: 'Error ocurrido en el servidor'
    })
  }
}
export default sendEmail
