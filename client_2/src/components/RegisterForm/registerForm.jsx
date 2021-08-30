import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import InputForm from '../common/inputForm/inputForm'
import c from './registerForm.module.css'
import {required} from '../common/Validate/validate'

let RegisterForm = props => {
  const { handleSubmit } = props
  return (
    <div className={c.forma__wrapper}>
      <form onSubmit={handleSubmit}>

        <Field name='email' type='email' component={InputForm} placeholder="Введите почту" validate={[required]}/>
        <Field name='password' type='password' component={InputForm} placeholder="Введите пароль" validate={[required]}/>

        <button>Регистрация</button>

      </form>
    </div>
  )
}

const afterSubmit = (result, dispath) => {
  dispath(reset('login'));
}

RegisterForm = reduxForm({
  form: 'login',
  onSubmitSuccess: afterSubmit,
})(RegisterForm)

export default RegisterForm;