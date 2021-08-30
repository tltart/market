import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RegisterForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    
    <Field name='email' type='email' component='input' />
    <Field name='password' type='password' component='input' />

    <button>Регистрация</button>

    </form>
}

RegisterForm = reduxForm({
  form: 'login'
})(RegisterForm)

export default RegisterForm;