import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Store from './components/Store'
import { products, IProduct } from './data/ProductList'
import React from 'react'
import Cart from './components/Cart'
import debounce from 'lodash/debounce'

function App() {
  const memoizedProducts = useMemo(() => products, []);
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>(memoizedProducts);
  const [cart, setCart] = useState<IProduct[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((product: IProduct) => {
      setCart(prev => [...prev, product])
  }, [cart])

  const debouncedSort = useMemo(
    () =>
      debounce((sortOn: string) => {
        if (sortOn === 'all') {
          setVisibleProducts(memoizedProducts);
        } else {
          const sortedProducts = memoizedProducts.filter(product => product.category === sortOn);
          setVisibleProducts(sortedProducts);
        }
      }, 300),
    [memoizedProducts]
  );

  const sortCart = useCallback((sortOn: string) => {
    debouncedSort(sortOn);
  }, [debouncedSort]);


  const removeFromCart = useCallback((product: IProduct) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(p => p.id !== product.id);
      if (newCart.length === 0) {
        setIsCartOpen(false);
      }
      return newCart;
    });
  }, [])

  useEffect(() => {
    return () => {
      debouncedSort.cancel();
    };
  }, [debouncedSort]);

  return (
    <div>
      <Nav cart={cart} onCartOpenClick={() => setIsCartOpen(!isCartOpen)}/>
      <Store onUserAdd={addToCart} onCartSort={sortCart} visibleProducts={visibleProducts}/>
      {
        isCartOpen && <Cart cart={cart} closeCart={() => setIsCartOpen(false)} removeFromCart={removeFromCart}/>
      }
    </div>
  )
}

export default App
