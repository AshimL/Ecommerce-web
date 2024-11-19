import {PRODUCTS} from "../../product"
import { Product } from "./product"
import './shop.css'


export const Shop = () =>{
  return (
    <div className="shop">
      <div className = "shopTitle"> 
        <h1>Shopping online got even more better</h1>
      </div>

      <div className="products">
      {PRODUCTS.map((product) =>(
        <Product  data={product}/>
      ))}

      </div>
    </div>
  )
} 