import React from 'react';
import c from './inputForm.module.css'


const InputForm = ({ input, meta, mess, ...props }) => {
    return (
        <div className={c.forma}>
            <input {...input} {...props} />
            <div>
                {meta.touched && meta.error &&
                    <p className={c.error}>{meta.error}</p>}
            </div>
        </div>
    )
}

export default InputForm