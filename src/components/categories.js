import React, {useState} from 'react';
const Categories = () => {
    const [type,setType]=useState('Холодные закуски')
    return (
    <div className="type">
        <ul>
            <li onClick={()=>setType('Холодные закуски')}>Холодные закуски</li>
            <li onClick={()=>setType('Горячие закуски')}>Горячие закуски</li>
            <li  onClick={()=>setType('Мясные блюда')}>Мясные блюда</li>
            <li onClick={()=>setType('Напитки')}>Напитки</li>
        </ul>
        <h1 className="zagl">{type}</h1>
    </div>


    );
};

export default Categories;