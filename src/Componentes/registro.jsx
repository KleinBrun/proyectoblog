import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

function Registro() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [telefono, setTelefono] = useState('');

    async function addUsuarios() {
        const obj = {nombre, correo, pass, telefono};
        const res = await axios.post('http://localhost/apiRegistro/', obj);
        console.log(res.data)
    }

        return(
            <>
                <form onSubmit={e=>e.preventDefault()}>
                    <h1>Crear Cuenta</h1><br/>
                    <label>Correo</label><br/><input name = 'correo' type='text'  onChange={(e) => setCorreo(e.target.value)} /><br/>
                    <label>Nombres</label><br/><input name = 'nombres' type='text'onChange={(e) => setNombre(e.target.value)} /><br/>
                    <label>Contraseña</label><br/><input name = 'passwr' type='password' onChange={(e) => setPass(e.target.value)} /><br/><br/>
                    <label>Telefono</label><br/><input name = 'passwr' type='text' onChange={(e) => setTelefono(e.target.value)} /><br/><br/>
                    <button  className="btn btn-outline-success btn-sm" 
                        onClick={(e) => addUsuarios(e)} >OK  </button> 
                </form>
            </>
        );
}

export default Registro
