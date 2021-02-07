import React, { Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 


function Login() {
    const [listaCor, setListaCor] =  useState([]);
    const [listaPas, setListaPas] =  useState([]);
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    
    useEffect(() => {
        getCor();
        getPas();
      },[])
    async function getCor(){
        const res = await axios.get('http://localhost/apiLoginCorreo/');
        setListaCor(res.data) 
    } 
     async function getPas(){
        const res = await axios.get('http://localhost/apiLoginPass/');
        setListaPas(res.data) 
    } 
    function Verificar(e) {
        e.preventDefault(); 
        
        const cora = correo=='admin'?true:false
        const pasa = pass=='0'?true:false
        if(pasa && cora){
            window.location.href ="/administrador"
        }else{
            const cor = listaCor.includes(correo)?true:false
            const pas = listaPas.includes(pass)?true:false
            if(pas && cor){
                window.location.href ="/inicio"
            }
        }

        return;
    }

    //<pre>{ JSON.stringify(this.state)}</pre>
        return(
            <>
                <form onSubmit={e=>e.preventDefault()}>
                    <h1>Iniciar Sesión</h1><br/>
                    <input
                        name = 'correo' 
                        type='text'
                        placeholder='Ingreses Su Correo'
                        onChange={(e) => setCorreo(e.target.value)}
                    /><br/><br/>
                    <input 
                        name = 'passw' 
                        type='password'
                        placeholder='Ingreses Su Contraseña'
                        onChange={(e) => setPass(e.target.value)}
                    /><br/><br/>
                    <button 
                        type='submit' 
                        className='primary'
                        onClick={(e) => Verificar(e)}
                    >Entrar</button>
                <h6 ><Link to='/registro' className='nav-link'>No tienes cuenta? Registrate...</Link></h6> 
                </form>
            </>
        );
 
}

export default Login