import React from 'react';
import Select from 'react-select'


const SelectMenu = React.memo(({ state, handleChange, options, placeholder }) => {
    console.log("RENDER SELECT GOODS");
    return (
        <Select value={state} onChange={handleChange} options={options} placeholder={placeholder} 
        styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                                        menuPortalTarget={document.body}
                                        menuPosition={'fixed'}/>
    )
})

export default SelectMenu;