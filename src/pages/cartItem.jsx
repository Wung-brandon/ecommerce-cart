import './shop/shop.css'
import { useContext } from 'react'
import { shopContext } from '../context/shopContext'

export default function CartItem({ data }){
    const {addToCart, cartItems, removeFromCart, updateCartNumber} = useContext(shopContext)
    const {id, title, newPrice, img} = data
    return(
        <div className="cartItem">
            <img src={img} alt="" />
            <div className="desc">
                <p>
                    <b>{title}</b>
                    <p>${newPrice}</p>
                    <div className="countHandler">
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <input 
                            value={cartItems[id]} 
                            onChange={(e) => updateCartNumber(Number(e.target.value), id)}
                        />
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                </p>
            </div>
        </div>
    )
}