import React from 'react';
import { useState } from 'react';
import c from './customSelect.module.css'

const CustomSelect = () => {

    const [value, setValue] = useState('default');

    const changee = (e) => {
        setValue(e.target.value);
    }

    return (
        <select className={value == 'default' ? `${c.select}` : `${c.select} ${c.act}`} name="select" value={value} onChange={changee}>
            <option value="default" disabled hidden>Выбрать вкус</option>
            <option value="shit">Говно</option>
            <option value="plum">Слива</option>
            <option value="lava">Лава</option>
            <option value="porridge">Каша</option>
            <option value="onion">Лук</option>
        </select>
    )
}

export default CustomSelect;