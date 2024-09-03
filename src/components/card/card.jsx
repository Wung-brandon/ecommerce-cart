import { BsFillBagHeartFill } from 'react-icons/bs'
import './card.css'
import { shopContext } from '../../context/shopContext'
import { useContext } from 'react'

export default function Card({shoe}){

    const { addToCart, cartItems } = useContext(shopContext)

    const cartAmount = cartItems[shoe.id]
    return(
        <section className="card">
            <p style={{textAlign:"center", fontWeight:"bold"}}>{shoe.id}</p>

        <img 
            src={shoe.img} 
            alt="shoe" 
            className='card-img'
        />
        <div className="card-details">
            <h3 className="card-title">{shoe.title}</h3>
        <section className="card-reviews">
            {shoe.star} {shoe.star} {shoe.star} {shoe.star}
            {/* <AiFillStar className='ratings-star'/> 
            <AiFillStar className='ratings-star'/> 
            <AiFillStar className='ratings-star'/> 
            <AiFillStar className='ratings-star'/> */}
            <span className="total-reviews">{shoe.reviews}</span>
        </section>
        <section className="card-price">
            <div className="price">
                <span>${shoe.newPrice}</span>
            </div>
            <div className="bag">
                <BsFillBagHeartFill className='bag-icons'/>
            </div>
            <button className='cart-btn' onClick={() => addToCart(shoe.id)}>add to cart {cartAmount > 0 && <>({cartAmount})</>}</button>
        </section>
        </div>

    </section>
    )
}