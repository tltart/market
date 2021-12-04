import React from 'react';
import { AddGoodToBaseThunk } from '../store/adminReducer'
import { connect } from 'react-redux'
import { useState } from 'react';


const AdminPage = ({ AddGoodToBaseThunk }) => {

    const [name, setName] = useState('');
    const [taste, setTaste] = useState('');
    const [price, setPrice] = useState('');
    const [info, setInfo] = useState('');
    const [image, setImage] = useState(null);

    const addGood = (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('img', image);
        formData.append('price', price);
        formData.append('info', info);
        AddGoodToBaseThunk(formData);
    }

    return (
        <div>
            <form>
                <input name="image" type="file" onChange={e=>setImage(e.target.files[0])}/>
                <input type="text" name="name" placeholder="Название" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="text" name="price" placeholder="Цена" value={price} onChange={e=>setPrice(e.target.value)}/>
                <textarea name="info" placeholder="Описание" value={info} onChange={e=>setInfo(e.target.value)}/>
                <button onClick={addGood}>Добавить товар</button>
            </form>
        </div>

    );
};




export default connect(null, { AddGoodToBaseThunk })(AdminPage);