//import { useState,useEffect } from 'react';
import './card.css'
import { useSelector } from 'react-redux';



function Menu() {

    const {productos} = useSelector((storedata)=>{
        return storedata;
    })
    
  {/*} const[productos,setData] =useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://pizzaallapala.p.rapidapi.com/productos';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd7f38419ccmshc4e58f53615dffdp1a59cfjsnff4713ddc2c4',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
          }
        };
  
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setData(result.productos);
          console.log(result.productos);
        } catch (error) {
          console.error(error);
        }
      };  
     fetchData();
     
    }, []); */}
  
    return (
        <>
      
     
        <div className='grd'>
            
        {productos.map((item) => (
         
          <div  className='card' key={item.id}>
            
            <img src={item.linkImagen} alt=" " />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
           
           </div>
        ))}
      </div>
</>
    );
}
  export default Menu;
