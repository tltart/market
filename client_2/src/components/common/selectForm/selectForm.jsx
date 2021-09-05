import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

let SelectForm = (props) => {
    console.log(props.favoriteColorValue)
    const { handleSubmit } = props
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Favorite Color</label>
                <div>
                    <Field name="SelectForm" component="select">
                        <option></option>
                        <option value="#ff0000">Red</option>
                        <option value="#00ff00">Green</option>
                        <option value="#0000ff">Blue</option>
                    </Field>
                </div>
            </form>
        </div>
    )
}

SelectForm = reduxForm({
    form: 'SelectForm'
})(SelectForm)

const selector = formValueSelector('SelectForm')

export default connect(state => {
    const favoriteColorValue = selector(state, 'SelectForm')
    return {favoriteColorValue}
    })(SelectForm)