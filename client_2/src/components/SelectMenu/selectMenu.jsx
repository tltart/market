import React from 'react';
import Select from 'react-select'


const SelectMenu = ({ state, handleChange, options, placeholder }) => {

    return (
        <Select value={state} onChange={handleChange} options={options} placeholder={placeholder} />
    )
}

export default SelectMenu;