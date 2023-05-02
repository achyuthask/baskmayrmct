
import { Route, Routes } from 'react-router-dom';
import Home from './comp/home';
import Navbar from './comp/navbar/navbar';
import Ordepage from './comp/ordepage';
import Ordersucess from './comp/ordersucess';
import Menu from './comp/menu';

function App() {
  return (
    <div className="App">

       <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orderpage' element={<Ordepage />} />
        <Route path='/ordersuccess' element={<Ordersucess />} />
        <Route path='/menu' element={<Menu />} />
      
      </Routes>
    
    </div>
  );
}

export default App;
