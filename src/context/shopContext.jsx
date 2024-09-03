import { createContext, useState } from "react"
import data from "../db/data"

export const shopContext = createContext(null)

function getDefaultCart(){
    let cart = {}
    for (let i = 1; i < data.length + 1; i++){
        // console.log("i", i)
        cart[i] = 0
    }
    return cart
}

export default function ShopContextProvider(props){
    const [cartItems, setCartItems] = useState(getDefaultCart())

    function getTotalCartAmount(){
        let totalAmount = 0
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = data.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.newPrice
            }
        }
        return totalAmount
    }

    function addToCart(itemId){
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
    }

    function removeFromCart(itemId){
        setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }

    function updateCartNumber(newValue, itemId){
        setCartItems((prev) => ({...prev, [itemId]:newValue}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartNumber, getTotalCartAmount}

    console.log("cartItems",cartItems)

    return(
        
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}