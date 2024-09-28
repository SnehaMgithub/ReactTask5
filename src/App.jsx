import React,{useState,useEffect}from 'react';
import axios from 'axios';
import ProductList from './Components/Product/ProductList';
import Navbar from './Components/Navbar/Navbar';

import './index.css'
import Cart from './Components/Cart/CartList';

const App = () => {
  const [isModal,setModal]=useState(false);
  const [fetchData,setFetchData]=useState([]);
  const [cart,setCart]=useState([]);
    useEffect(()=>{
            const fetchProduct = async()=>{
            await axios.get('https://fakestoreapi.com/products')
            .then(res=>setFetchData(res.data))
            .catch(error=>console.log(error))

         }
         fetchProduct();
    },[]);
 
  return (
    <div className="min-h-screen bg-gray-100">
       <Navbar cartCount={cart.length} openModal={()=>setModal(true)}/>
       <ProductList fetchData={fetchData} cart={cart} setCart={setCart} />
       {isModal && (
       <Cart cartItem={cart} 
       setCart={setCart} 
       closeModal={() => setModal(false)} />)}
       
       
        
    </div>
  );
};

export default App;