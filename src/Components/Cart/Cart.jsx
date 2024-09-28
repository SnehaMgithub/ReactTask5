import React from 'react';

const Cart = ({ cartItem, setCart, closeModal }) => {
  const handleRemove = (itemId) => {
    setCart(cartItem.filter(ele => ele.id !== itemId));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {
        cartItem.length > 0 ? (
          cartItem.map((item, index) => {
            return (
              <ul key={item.id} >
                <li className='mb-4 flex justify-between items-center'>
                  <img className="w-10 h-10" src={item.image} alt={item.title} width="150" height="150" />
                  <h2 className="text-lg">{item.title}</h2>
                  <h2>${item.price}</h2>
                  <button  className="bg-red-500 text-white px-4 py-2 rounded"  onClick={() => handleRemove(item.id)}>Remove</button>
                </li>
              </ul>
            );
          })
        ) : (
          <p>Your cart is empty.</p>
        )
      }
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"  onClick={closeModal}>Close</button>
      </div>
    </div>
  
  );
};

export default Cart;
