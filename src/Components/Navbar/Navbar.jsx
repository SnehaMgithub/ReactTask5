import React from 'react';

const Navbar = ({openModal,cartCount}) => {
    
    return (
           <nav className='bg-slate-500 text-white flex p-3 justify-between'>
           <h2 className='text-2xl p-2 font-bold'>ʍʏֆɦօք</h2>
           <button className="relative p-2 text-2xl font-bold" onClick={openModal}>Cart {cartCount}</button>
           </nav>
    );
};

export default Navbar;