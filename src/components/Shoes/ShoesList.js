import { useContext } from "react";
import CartContext from "../../store/cart-context";


const ShoesList = ({ name, description, price,sm,md,lg }) => {
  const cartCtx = useContext(CartContext);
   
  const smHandler = (e) => {
    e.preventDefault();
    let obj = {id: `sm${Math.random}`, name: name, description: description, price: price, sm:1, type:'small'};
    console.log(obj)
    cartCtx.addItem(obj);
  };
  const mdHandler = (e) => {
    e.preventDefault();
    let obj = {id: `med${Math.random}`, name: name, description: description, price: price, md:1, type:'medium' };
    console.log(obj)
    cartCtx.addItem(obj);
  };const lgHandler = (e) => {
    e.preventDefault();
    let obj = {id: `lrg${Math.random}`, name: name, description: description, price: price, lg:1, type:'large' };
    console.log(obj)
    cartCtx.addItem(obj);
  };
  return (
    <li>
      <form>
          <div><h2>{name}</h2></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div><h4 className="description">{description}</h4></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div><h3 className="price">Rs.{price}</h3></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div><button type="submit" className="item-input" onClick={smHandler}>Buy Small{sm}</button></div>
          <div><button type="submit" className="item-input" onClick={mdHandler}>Buy Medium{md}</button></div>
          <div><button type="submit" className="item-input" onClick={lgHandler}>Buy Large{lg}</button></div>
      </form>
      <hr></hr>
    </li>
  );
};

export default ShoesList;
