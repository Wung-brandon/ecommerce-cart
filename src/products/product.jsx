import Card from "../components/card/card";
import data from "../db/data";
import Navigation from "../Navigation/nav";
import { useState } from "react";



export default function Product(){
    const [getValue, setValue] = useState("")
    const [filterProducts, setFilterProducts] = useState(data)

   

    function handleChange(e){
        const value = e.target.value
        setValue(value)

        const filter = filterProducts.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
        setFilterProducts(filter)

    }

    return(
        <div>
            <Navigation handleChange={handleChange} value={getValue}/>
            <h2 style={{textTransform:"capitalize", textAlign:"center"}}>branvenia shop</h2>
            <section className="card-container">
                {filterProducts.map((shoe, i) => (
                    <Card shoe={shoe} key={i} />
                ))}
            </section>
        </div>
    )
}