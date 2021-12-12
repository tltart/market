import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import InputForm from '../common/inputForm/inputForm'
import c from './registerForm.module.css'
import { required, eq } from '../common/Validate/validate'


let RegisterForm = props => {
  const { handleSubmit, title, isLogin, errorMessage } = props
  return (
    <div className={c.forma__wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        {errorMessage && errorMessage}
        <Field name='email' type='email' component={InputForm} placeholder="Введите почту" validate={[required]} />
        <Field name='password' type='password' component={InputForm} placeholder="Введите пароль" validate={[required, eq]} />
        {!isLogin && <Field name='password_repeat' type='password' component={InputForm} placeholder="Повторите пароль" validate={[required, eq]} />}
        <button id={c.button}>{!isLogin ? 'Регистрация' : 'Войти'}</button>
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