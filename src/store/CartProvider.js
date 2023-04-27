import { useState } from "react";
import CartContext from "./cart-context";

const items = [];
const SHOES = [];

const CartProvider = (props) => {
  const [cartState, SetCartState] = useState(items);
  const [shoesState,setShoesState]=useState(SHOES)

  const addShoes = (obj)=>{
    setShoesState((pre)=>{return [obj,...pre]})
  }
  
  const addShoesToCart = (item)=> {
    SetCartState((preState) => {
      return [item, ...preState];
  })
}

  const removeShoesFromCart = (id) => {   
    SetCartState( cartState.filter(item => item.id !== id))
  };

  const cartContext = {
    items: cartState,
    totalAmount: 0,
    addItem: addShoesToCart,
    removeItem: removeShoesFromCart,
    addList:addShoes,
    shoes:shoesState
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
