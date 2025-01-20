import { useCallback, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Store from './components/Store'
import { products, IProduct } from './data/ProductList'
import React from 'react'
import Cart from './components/Cart'


function App() {
  const [visibleProducts, setVisibleProducts] = useState<IProduct[]>(products);
  const [cart, setCart] = useState<IProduct[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = useCallback((product: IProduct) => {
      setCart([...cart, product]);
  }, [cart])

  const sortCart = useCallback((sortOn: string) => {
    if (sortOn === 'all') {
      setVisibleProducts(products);
    } else {
      const sortedProducts = products.filter(product => product.category === sortOn);
      setVisibleProducts(sortedProducts);
    }
  }, [])

  const removeFromCart = useCallback((product: IProduct) => {
    setCart(prevCart => {
      const newCart = prevCart.filter(p => p.id !== product.id);
      if (newCart.length === 0) {
        setIsCartOpen(false);
      }
      return newCart;
    });
  }, [])

  return (
    <div>
      <Nav cart={cart} onCartOpenClick={() =>setIsCartOpen(!isCartOpen)}/>
      <Store onUserAdd={addToCart} onCartSort={sortCart} visibleProducts={visibleProducts}/>
      {
        isCartOpen && <Cart cart={cart} closeCart={() => setIsCartOpen(false)} removeFromCart={removeFromCart}/>
      }
    </div>
  )
}

export default App
