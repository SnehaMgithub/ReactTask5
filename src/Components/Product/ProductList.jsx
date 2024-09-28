import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/CartList';

const ProductList = ({fetchData,cart,setCart}) => {
    
    const handlecart=(product)=>
    {
        if(cart.some(ele=>ele.id===product.id))
        {
            alert("Already exist")
        }
        else
        {
            setCart([...cart,product]);
        }
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {           
                 fetchData.map((product,index)=>{
                    return(
                        <div className='bg-white p-4 shadow-md rounded-lg grid' key={product.id}>
                            <img className="h-40 object-contain mx-auto" src={product.image} alt={product.title} />
                            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                            <h2 className="text-gray-700 mt-1">${product.price}</h2>
                            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded " onClick={()=>handlecart(product)}>Add To Cart</button>
                        </div>
                    );
                })
              

            }
           
           
        </div>
    );
};

export default ProductList;