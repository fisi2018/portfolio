import { ContactFormType } from '../types/stateTypes'

export const contactValidation = (form: ContactFormType) => {
  const errors: ContactFormType = {
    email: '',
    name: '',
    message: '',
    subject: ''
  }
  if (!form.email.trim()) {
    errors.email = 'Es necesario ingresar un email '
  } else if (!form.message.trim()) {
    errors.message = 'Es necesario ingresar un mensaje '
  }
  return errors
}
