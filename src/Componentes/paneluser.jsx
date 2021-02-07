import React,{useState, useEffect} from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import PanelColum from "./panelcolum";


function Paneluser() {
    const [lista, setLista] =  useState([]);
    const [categoria, setCate] =  useState([]);
    const [titulo, settitulo] =  useState([]);
    const [img, setImg] =  useState([]);
    const [desc1, setDesc1] =  useState([]);
    const [desc2, setDesc2] =  useState([]);


useEffect(() => {
  getBlogs();
},[])

////////////////////// BLOG ///////////////////////
async function getBlogs(){
  const res = await axios.get('http://localhost/apiBlog/');
  setLista(res.data) 
  //console.log(res.data)
} 
function mostrar(cate,titulo,img,desc1,desc2) {
 setCate(cate);
 settitulo(titulo);
 setImg(img);
 setDesc1(desc1);
 setDesc2(desc2);
}
return ( 

          <div className="container">
    <div className="container">
        <div className="row grid-divider">
            <div className="col-sm-4">
            <PanelColum cate={categoria} titulo={titulo} img={img} desc1={desc1} desc2={desc2} />
            </div>
            <div className="col-sm-4">
                <div className="col-padding">
                          { lista.map( conte  => (
                    <div key={conte.id}>
                        <a onClick={event =>mostrar(conte.categoria,conte.titulo,conte.img,conte.desc1,conte.desc2)} className='text-uppercase font-italic text-primary'>{conte.titulo}</a>
                        <p className=' font-italic text-secundario'>{conte.desc1}</p>
                        <p className=' p-3 mb-2 bg-primary text-white'>{conte.categoria}</p>
                        <a href={conte.slug}>Mas info click Aqui..</a>
                        <img src={conte.img} /> <br/><br/><br/>
                    </div>
                  ))} 
                </div>
            </div>  
        </div>
    </div>
</div>


   


  );
}

export default Paneluser;
