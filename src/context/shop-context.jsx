import { createContext, useState } from "react"
import { useSubmit } from "react-router-dom";
import { PRODUCTS } from "../product";


export const ShopContext = createContext();

const getDefaultCart = () =>{
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++){
    cart[i] = 0
  }  

  return cart;
}

export const ShopContextProvider = (props) =>{
  const [cartItems, setcartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () =>{
    let totalAmount = 0;

    for (const items in cartItems){
      if(cartItems[items] > 0){
        let itemInfo = PRODUCTS.find((product) => product.id === Number(items))

        totalAmount += cartItems[items] * itemInfo.price  

      }
    }

    return totalAmount;
}

  const addToCart = (itemId) =>{
    setcartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    
  }

  const removeFromCart = (itemId) =>{
    setcartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1} ))
  };

  const updateCartItemCount = (newAmount, itemId) =>{
    setcartItems((prev) => ({...prev, [itemId] : newAmount}))
  }

  const contextValue = {
    cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}
 

  return (
   <ShopContext.Provider value={contextValue}>
    {props.children}
   </ShopContext.Provider>
  )
} 