import React, { useMemo, useState } from 'react'
import { products } from '../data/ProductList'
import ListingItem from './ListingItem'
import { ISortOption, IProduct } from '../data/local-types';

interface StoreProps {
    onUserAdd: (product: IProduct) => void;
    onCartSort: (sortOn: ISortOption) => void;
    visibleProducts: IProduct[];
}

const Store = React.memo(({onUserAdd, onCartSort, visibleProducts}: StoreProps) => {
    const memoizedProducts = useMemo(() => visibleProducts, [visibleProducts]);
    const [sortBy, setSortBy] = useState('all');

    const sortCart = (sortOn: ISortOption) => {
        setSortBy(sortOn);
        onCartSort(sortOn);
    }

    const uniqueCategories = useMemo(() => 
        [...new Set(products.map(product => product.category))],
        []  
    );  
    
    return (
    <div className="px-8">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-center my-8">Shanda's Store</h1> 
            <div>
                <select 
                value={sortBy}
                onChange={(e) => sortCart(e.target.value)}
                className="p-2 border rounded-md"
                > 
                    <option value="all" key={'all'}>All Categories</option>
                {
                    uniqueCategories.map((category) => (
                        <option value={category} key={category}>{category}</option>
                    ))
                }
                </select>
            </div>
        </div>
        <div className="flex flex-wrap justify-around gap-5">
        {
            !!memoizedProducts.length ?
            memoizedProducts.map((product) => {
                return (
                    <ListingItem product={product} onUserAdd={onUserAdd}/>
                )
            })
            :
            <div className="text-center text-gray-500">No products found</div>
        }
        </div>
    </div>
  )
});

export default Store