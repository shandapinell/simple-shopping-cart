import React from 'react'
import { IProduct } from '../data/local-types';

interface ListingItemProps {
    product: IProduct;
    onUserAdd: (product: IProduct) => void;
}

const ListingItem = ({product, onUserAdd}: ListingItemProps) => {
  return (
    <div className="w-[350px] border border-white py-2.5 text-center" key={product.id}>
        <div className="flex justify-center">
            <img className="my-8 w-[200px] h-[200px] object-cover" src={product.image} alt={product.title} />
        </div>
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <p className="mb-4">${product.price}</p>
        <p className="px-4 h-[75px]">{product.description}</p>
        <button aria-label="Add item to cart" className="mt-8" onClick={() => onUserAdd(product)}>Add to Cart</button>
    </div>
  )
}

export default ListingItem