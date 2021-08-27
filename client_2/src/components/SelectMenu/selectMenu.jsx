import React, { useState } from 'react';
import Select from 'react-select'


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const SelectMenu = ({ goods }) => {

    let [state, setState] = useState("Выбрать товар")

    const opt = goods.map(good =>
        {
            value: good.name
        }
        );

    const handleChange = () => {
        setState(state);
        console.log(`Option selected:`);
    };

    return (
        <Select value={state} onChange={handleChange} options={options} />
    )
}

export default SelectMenu;