import './navbar.css'
import { Link } from 'react-router-dom';

const Navbar =()=>{
    return(

        <>
      <ul>
    
  <li> <Link to="/">Home</Link></li>
  
 
  <li> <Link to="/menu">menu</Link></li>
  

  
  
</ul>
        </>
    );
}

export default Navbar;