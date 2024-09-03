import './nav.css'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineUserAdd, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
// import data from '../db/data'

export default function Navigation({handleChange, getValue}){

    return(
       <nav>
        <div className="nav-container">
            <p>{getValue}</p>
            <input 
                type="text" 
                className='search-input'
                placeholder='Enter your search shoes'
                onChange={handleChange}
                value={getValue}
            />
        </div>
        <div className="profile-container">
            <Link to="">
                <FiHeart className='nav-icons'/>
            </Link>

            <Link to='shop'>
                <AiOutlineShoppingCart className='nav-icons'/>
            </Link>

            <Link to="">
                <AiOutlineUserAdd className='nav-icons'/>
            </Link>
        </div>
       </nav>
    )
}