/* eslint-disable array-callback-return */
import './shop.css'
import data from '../../db/data'
import { shopContext } from '../../context/shopContext'
import { useContext } from 'react'
import CartItem from '../cartItem'
import { useNavigate } from 'react-router-dom'

export default function Shop(){

    const navigate = useNavigate()

    const { cartItems, getTotalCartAmount } = useContext(shopContext)
    const totalAmount = getTotalCartAmount()
    return(
        <div className='cart'>
            <h1 style={{textAlign:"center", textTransform:'capitalize'}}>your cart items</h1>
            <div>
                {data.map((product) => {
                    if (cartItems[product.id] !== 0){
                        return <CartItem data={product} />
                    } 

                })}
            </div>
            {totalAmount > 0 ? 
                        <div className="checkout">
                        <p style={{textTransform:'capitalize'}}>subtotal: ${totalAmount}</p>
                        <button>checkout</button>
                        <button onClick={() => navigate('/')}>continue shopping</button>
                    </div> : <h1>your cart is empty</h1>
        }

        </div>
    )
}