import { useContext } from "react";
import ShoesList from "./ShoesList";
import "./Shoes.css";
import CartContext from "../../store/cart-context";



const Meals = (props) => {
  const cartCtx=useContext(CartContext)
  return (
    <ul className="meals">
      {cartCtx.shoes.map((item) => (
        <ShoesList
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          sm={item.sm}
          md={item.md}
          lg={item.lg}
        />
      ))}
    </ul>
  );
};

export default Meals;
