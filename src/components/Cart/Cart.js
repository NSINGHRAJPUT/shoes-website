import "./Cart.css";
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);
  const [orderedShoes,setOrderedShoes] = useState(false)

  const orderHandler = () =>{
    setOrderedShoes(true);
  }
 
  const removeItemHandler = (e) =>{
    e.preventDefault();
    cartCtx.removeItem(e.target.value)
  }
  let finalPrice=0;
  let cartItems = cartCtx.items;
  cartItems.map((item) => (finalPrice = finalPrice + Number(item.price)));
  return (
    <Modal onCloseCart={onCloseCart}>
      {cartCtx.items.map((item) => (
        <div className="cart">
          <li className="title">
            <h2>{item.name}</h2>       
              <div>{item.price}</div>
              <div>{item.type}</div>
            <button className="subtract" value={item.id} onClick={removeItemHandler}>-</button>           
            </li>
        </div>
      ))}
      <div className="amount">
        <h2>Total price</h2>
        <h2>{Math.floor(finalPrice)}</h2>
      </div>
      <div className="button-btn">
        <button onClick={onCloseCart}>Close</button>
        <button onClick={orderHandler}>Order</button>
      </div>
      <div className="title">{orderedShoes && <p>Order Successful</p>}</div>
    </Modal>
  );
};

export default Cart;
