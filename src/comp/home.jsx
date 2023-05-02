import { useState,useEffect } from 'react';
import './card.css'
 import { useDispatch, useSelector } from 'react-redux';
 import { productActionCreator } from '../redux/actioncreater';

import { Link } from 'react-router-dom';




function Home() {
    



   //const[productos,setData] =useState([]);

 const dispatch = useDispatch();
   const {productos} = useSelector((storedata)=>{
      return storedata;
  })
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };





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
         dispatch(productActionCreator(result.productos));
         // setData(result.productos);
          console.log(result.productos);
        } catch (error) {
           dispatch(productActionCreator(error.productos));
          console.error(error); 
        }
      };  
     fetchData();
     
    }, []);
  
    return (
        <>
       <h1 style={{fontSize:"90px"}}>scroll down</h1>
     {productos.length>0 ?(
        <div className='ard'>
            
        {productos.map((item) => (
         
          <div  className='card' key={item.id}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          >
            
            <h5>{item.id}</h5>
            <img src={item.linkImagen} alt=" " />
            <h2>{item.nombre}</h2>
            <h3>$:{item.precio}</h3>
            <p>{item.descripcion}</p>
            {isHovering && (
          <div>
            <button><Link to="/orderpage">add to cart</Link></button>
            <button>Quick view</button>
          </div>
            )}
           </div>
        ))}
      </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          No Product to Display
        </h2>
      )}
</>
    );
}
  export default Home;

