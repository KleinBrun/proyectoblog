import React,{useState, useEffect} from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Panelcolum(props) {
return (
    <div className="col-padding">
        <h2 className='text-uppercase font-italic text-primary' >Contenido</h2><br/>
        <h3 className='text-uppercase font-italic text-primary' >{props.titulo}</h3>
        <p className=' p-3 mb-2 bg-primary text-white'>{props.cate}</p>
        <img src={props.img} />
        <p className=' font-italic text-primary'>{props.desc1}</p>
        <p className=' text-secundario'>{props.desc2}</p>
        <p></p>
    </div>
  );
}

export default Panelcolum;
