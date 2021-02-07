import React,{useState, useEffect} from 'react';
import {FaCheckCircle, FaTrash, FaPen } from 'react-icons/fa'; 
import axios from 'axios'; 

function Paneladmin() {
  
    const [lista, setLista] =  useState([]);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [pass, setPass] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tipouser, settuser] = useState('');
    const [id, setId] = useState(''); 
    const [bandera, setBandera] = useState(true);
    const [lista1, setLista1] =  useState([]);
    const [categoria, setCategoria] = useState('');
    const [titulo, setTitulo] = useState('');
    const [slug, setSlug] = useState('');
    const [desc1, setDesc1] = useState('');
    const [desc2, setDesc2] = useState('');
    const [img, setImg] = useState('');
    const [bandera1, setBandera1] = useState(true);
    const [lista2, setLista2] =  useState([]);
    const [idCategoria, setIdCategoria] = useState(''); 
    const [bandera2, setBandera2] = useState(true);

useEffect(() => {
  getUsuarios();
  getBlogs();
  getCates();
},[])

//////////////////////// USUARIOS //////////////////////
async function getUsuarios(){
    const res = await axios.get('http://localhost/apiUser/');
    setLista(res.data) 
    console.log(res.data)
} 

async function addUsuarios() {
    const obj = {nombre, correo, pass, telefono, tipouser};
    const res = await axios.post('http://localhost/apiUser/', obj);
    console.log(res.data)
    getUsuarios();
}

async function UpdateUsuario(e) {
    const obj = {id, nombre, correo, pass, telefono, tipouser};
    const res = await axios.put('http://localhost/apiUser/', obj);
    console.log(res.data)
    getUsuarios();

}

function addUpdate(e) {
    e.preventDefault(); 
    bandera? addUsuarios():UpdateUsuario();
    limpiarEstado();
}

async function deleteUsuario(id){ 
   if(window.confirm('Quieres eliminar?')){
      const res = await axios.delete('http://localhost/apiUser/?id='+id);
      getUsuarios();
      console.log(res.data)
  }
} 
async function getUsuario(id){
    const res = await axios.get('http://localhost/apiUser/?id='+id);
    setId(res.data.id);
    setNombre(res.data.nombre);
    setCorreo(res.data.correo);
    setPass(res.data.pass);
    setTelefono(res.data.telefono);
    settuser(res.data.tipouser);
    setBandera(false);    
} 

function limpiarEstado(){
  setId('');
  setNombre('');
  setCorreo('');
  setPass('');
  setTelefono('');
  settuser('');
  setBandera(true);
}

////////////////////// BLOG ///////////////////////
async function getBlogs(){
  const res = await axios.get('http://localhost/apiBlog/');
  setLista1(res.data) 
  console.log(res.data)
} 
async function addContBlog() {
  const obj = {categoria, titulo, slug, desc1, desc2, img}; 
  const res = await axios.post('http://localhost/apiBlog/', obj);
  console.log(res.data)
  getBlogs();
}
async function UpdateContBlog(e) {
  const obj = {id, categoria, titulo, slug, desc1, desc2, img}; 
  const res = await axios.put('http://localhost/apiBlog/', obj);
  console.log(res.data)
  getBlogs();
}
function addUpdateContBlog(e) {
  e.preventDefault(); 
  bandera1? addContBlog():UpdateContBlog();
  limpiarEstadoBlog();
}
async function deleteContBlog(id){ 
  if(window.confirm('Quieres eliminar?')){
     const res = await axios.delete('http://localhost/apiBlog/?id='+id);
     getBlogs();
     console.log(res.data)
 }
} 
async function getBlog(id){
  const res = await axios.get('http://localhost/apiBlog/?id='+id);
  setId(res.data.id);
  setCategoria(res.data.categoria);
  setTitulo(res.data.titulo);
  setSlug(res.data.slug);
  setDesc1(res.data.desc1);
  setDesc2(res.data.desc2);
  setImg(res.data.img);
  setBandera1(false);    
} 
function limpiarEstadoBlog(){
  setId('');
  setCategoria('');
  setTitulo('');
  setSlug('');
  setDesc1('');
  setDesc2('');
  setImg('');
  setBandera1(true);
}
////////////////////// CATEGORIA ///////////////////////
async function getCates(){
  const res = await axios.get('http://localhost/apiCategoria/');
  setLista2(res.data) 
  console.log(res.data)
} 
async function addCate() {
  const obj = {idCategoria}; 
  const res = await axios.post('http://localhost/apiCategoria/', obj);
  console.log(res.data)
  getCates();
}
async function UpdateCate(e) {
  const obj = {id, idCategoria}; 
  const res = await axios.put('http://localhost/apiCategoria/', obj);
  console.log(res.data)
  getCates();
}
function addUpdateCate(e) {
  e.preventDefault(); 
  bandera2? addCate():UpdateCate();
  limpiarEstadoCate();
}
async function deleteCate(id){ 
  if(window.confirm('Quieres eliminar?')){
     const res = await axios.delete('http://localhost/apiCategoria/?id='+id);
     getCates();
     console.log(res.data)
 }
} 
async function getCate(id){
  const res = await axios.get('http://localhost/apiCategoria/?id='+id);
  setId(res.data.id);
  setIdCategoria(res.data.idCategoria);
  setBandera2(false);    
} 
function limpiarEstadoCate(){
  setId('');
  setIdCategoria('');
  setBandera2(true);
}

return (
  <div className="container ">
       <div className="col-md-6 p-2 ">
       {/* TABLA USUARIOS---------------------------------------------------------------------------- */}
       <h3>GESTION DE USUARIOS</h3>
       <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Telefono</th>
              <th scope="col">T.User</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
          { lista.map( user  => (
              <tr key={user.id}>
                <th scope="row">  {user.id} </th>
                <td> {user.nombre} </td>
                <td>{user.correo}</td>
                <td>{user.pass}</td>
                <td>{user.telefono}</td>
                <td>{user.tipouser}</td>
                <td>                       
                  <button  className="btn btn-outline-danger btn-sm " 
                    onClick={() => deleteUsuario(user.id)} ><FaTrash />
                   </button> 
                  <button className="btn btn-outline-secondary btn-sm mr-2" 
                    onClick={() => getUsuario(user.id)} ><FaPen />
                   </button> 
                </td>
              </tr>
            ))} 
          </tbody>
        </table>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <input 
                    type="text" placeholder="Nombre" className="form-control"
                    onChange={(e) => setNombre(e.target.value)} value={nombre}
                />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Correo" className="form-control"
                  onChange={(e) => setCorreo(e.target.value)} value={correo}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Contraseña" className="form-control"
                  onChange={(e) => setPass(e.target.value)} value={pass}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Telefono Movil" className="form-control"
                  onChange={(e) => setTelefono(e.target.value)} value={telefono}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Tipo Usuario Adm =1 Normal = 2" className="form-control"
                  onChange={(e) => settuser(e.target.value)} value={tipouser}
              />
              </th>
            </tr>
          </thead>
        </table>
        <button  className="btn btn-outline-success btn-sm" 
                onClick={(e) => addUpdate(e)} >
                  {bandera?"Añadir":"Editar"}
        <FaCheckCircle /></button> <br/><br/><br/>
{/* TABLA CATEGORIA---------------------------------------------------------------------------- */}
<h3>GESTION DE CATEGORIAS</h3>
       <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Categoria</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
          { lista2.map( cates  => (
              <tr key={cates.id}>
  
                <th scope="row">  {cates.id} </th>
                <td> {cates.idCategoria} </td>
                <td>                       
                  <button  className="btn btn-outline-danger btn-sm " 
                    onClick={() => deleteCate(cates.id)} ><FaTrash />
                   </button> 
                  <button className="btn btn-outline-secondary btn-sm mr-2" 
                    onClick={() => getCate(cates.id)} ><FaPen />
                   </button> 
                </td>
              </tr>
            ))} 
          </tbody>
        </table>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <input 
                    type="text" placeholder="Categotia" className="form-control"
                    onChange={(e) => setIdCategoria(e.target.value)} value={idCategoria}
                />
              </th>
            </tr>
          </thead>
        </table>
        <button  className="btn btn-outline-success btn-sm" 
                 onClick={(e) => addUpdateCate(e)} >
                  {bandera2?"Añadir":"Editar"}
        <FaCheckCircle /></button><br/><br/><br/>
        {/* TABLA BLOG---------------------------------------------------------------------------- */}
       <h3>GESTION DE BLOG</h3>
       <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Categoria</th>
              <th scope="col">Titulo</th>
              <th scope="col">Slug</th>
              <th scope="col">Desc1</th>
              <th scope="col">Desc2</th>
              <th scope="col">imagen</th>
              <th scope="col">Opciones </th>
            </tr>
          </thead>
          <tbody>
          { lista1.map( user  => (
              <tr key={user.id}>
  
                <th scope="row">  {user.id} </th>
                <td> {user.categoria} </td>
                <td>{user.titulo}</td>
                <td>{user.slug}</td>
                <td>{user.desc1}</td>
                <td>{user.desc2}</td>
                <td>{user.img}</td>
                  <td>                       
                    <button  className="btn btn-outline-danger btn-sm " 
                      onClick={() => deleteContBlog(user.id)} ><FaTrash />
                    </button> 
                    <button className="btn btn-outline-secondary btn-sm mr-2" 
                      onClick={() => getBlog(user.id)} ><FaPen />
                    </button> 
                  </td>
              </tr>
            ))} 
          </tbody>
        </table>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">
                <select onChange={(e) => setCategoria(e.target.value)} value={categoria}  className="form-select" aria-label="Default select example">
                  <option defaultValue >Seleccione</option>
                    { lista2.map( cates  => (
                    <option key={cates.id}  value={cates.id} >{cates.idCategoria}</option>
                    ))} 
                </select>
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Titulo" className="form-control"
                  onChange={(e) => setTitulo(e.target.value)} value={titulo}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Descripcion" className="form-control"
                  onChange={(e) => setSlug(e.target.value)} value={slug}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Descripcion" className="form-control"
                  onChange={(e) => setDesc1(e.target.value)} value={desc1}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Descripcion" className="form-control"
                  onChange={(e) => setDesc2(e.target.value)} value={desc2}
              />
              </th>
              <th scope="col">
              <input 
                  type="text" placeholder="Imagen" className="form-control"
                  onChange={(e) => setImg(e.target.value)} value={img}
              />
              </th>
            </tr>
          </thead>
        </table>
        <button  className="btn btn-outline-success btn-sm" 
                onClick={(e) => addUpdateContBlog(e)} >
                  {bandera1?"Añadir":"Editar"}
        <FaCheckCircle /></button>
        
      </div>
</div>
  );
}

export default Paneladmin;
