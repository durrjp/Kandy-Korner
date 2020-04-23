import React from "react"
import "./Product.css"

export default (props) => {
    return (
    <section className="product">
        <h4 className="product__name">{props.product.name}</h4>
        <div className="product__address">Price: ${props.product.price}</div>
        <div className='product__sqft'>Type: {props.productType.type}</div>
    </section>
    )
}