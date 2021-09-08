import React from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import InputForm from '../common/inputForm/inputForm'
import c from './registerForm.module.css'
import { required } from '../common/Validate/validate'
import Cc from '../common/Cal/cal'



let RegisterForm = props => {
  const { handleSubmit, title, isLogin } = props
  return (
    <div className={c.forma__wrapper}>
      <form onSubmit={handleSubmit}>
        <h1>{title}</h1>
        <Field name='email' type='email' component={InputForm} placeholder="Введите почту" validate={[required]} />
        <Field name='password' type='password' component={InputForm} placeholder="Введите пароль" validate={[required]} />
        {/* <Field name='date' type='text' component={Cc} placeholder="Дату" validate={[required]} /> */}
        {!isLogin && <Field name='password' type='password' component={InputForm} placeholder="Повторите пароль" validate={[required]} />}
        <button className={c.button}>Регистрация</button>
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