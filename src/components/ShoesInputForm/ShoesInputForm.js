import { useContext, useRef } from 'react';
import './ShoesInputForm.css'
import CartContext from '../../store/cart-context';

const MedicineInputForm = () =>{
    const cartCtx=useContext(CartContext)
    let name = useRef();
    let desc = useRef();
    let price = useRef();
    let sm = useRef();
    let md = useRef();
    let lg = useRef();
    
    const submitHandler=(e)=>{
        e.preventDefault();
        let obj={
            id:`I${cartCtx.shoes.length}`,
            name:name.current.value,
            description:desc.current.value,
            price:price.current.value,
            sm:sm.current.value,
            md:md.current.value,
            lg:lg.current.value
        }
        console.log(obj)
       cartCtx.addList(obj)
    }
    return <form className='form' onSubmit={submitHandler}>
            <label>Shoes Name</label>
            <input type='text' ref={name}></input><br/>
            <label>Shoes Desc.</label>
            <input type='text' ref={desc}></input><br/>
            <label>Price</label>
            <input type='number' ref={price}></input><br/>
            <div className='qty'>Quantity:-{" "}
            <label>S</label>
            <input type='number' ref={sm}></input>
            <label>M</label>
            <input type='number' ref={md}></input>
            <label>L</label>
            <input type='number' ref={lg}></input>
            </div><br/>
            <button type='submit' >Add Shoes</button>
    </form>
}



export default MedicineInputForm;