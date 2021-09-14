import React from 'react';
import Select from 'react-select'


const SelectMenu = ({ product, handleChange, options }) => {
    return (
        <Select value={product} onChange={handleChange} options={options}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
            menuPortalTarget={document.body}
            menuPosition={'fixed'} />
    )
}

export default SelectMenu;