import React from 'react'
import { IProduct } from '../data/ProductList';

interface NavProps {
    cart: IProduct[];
    onCartOpenClick: () => void;
}

const Nav = ({cart, onCartOpenClick}: NavProps) => {
  return (  
    <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Shanda's Store</h2>
        <button className="bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600 cursor-pointer" onClick={onCartOpenClick}>
          Cart ({cart.length})
        </button>
    </div>
  )
}

export default Nav