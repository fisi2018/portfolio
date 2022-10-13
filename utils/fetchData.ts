import axios from 'axios'
import { API } from '../consts/envs'
import { ContactFormType } from '../types/stateTypes'

export const sendEmail = async (form:ContactFormType) => {
  try {
    const response = await axios.post(`${API}/email`, form)
    const data = await response.data
    return data
  } catch (err) {
    return {
      message: 'Ha ocurrido un error en la petición',
      error: err
    }
  }
}
