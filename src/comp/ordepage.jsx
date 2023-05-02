import React, { useState } from 'react';
import './orderform.css';
import { Link } from 'react-router-dom';


const Ordepage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(1);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Name: ${name}\nEmail: ${email}\nItem: ${item}\nQuantity: ${quantity}`);
    };
  
    return (
      <div className="order-form">
        
        <form onSubmit={handleSubmit}>
            <h1>Welcome To Italian Pizza<br></br>order is on us</h1>
     
           <h1><hr></hr></h1>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
  
          <label htmlFor="item">Item:</label>
          <select id="item" value={item} onChange={(event) => setItem(event.target.value)}>
            <option value="">-- Please select an item --</option>
            <option value="Pizza">Pizza</option>
            <option value="Burger">Burger</option>
            <option value="Salad">Salad</option>
          </select>
  
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" min="1" max="10" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
  
          <button type="submit"><Link to="/ordersuccess">submit</Link></button>
        </form>
      </div>
    );
}

export default Ordepage;


