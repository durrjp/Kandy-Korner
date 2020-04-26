import React, { useContext } from "react"
import {Button} from "reactstrap"
import "./Product.css"
import { CustomerCandyContext } from "../orders/CustomerCandyProvider"

export default (props) => {
    const { addCustomerCandy } = useContext(CustomerCandyContext)

    const constructCustomerCandy = () => {
        const productId = props.product.id
        const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

        addCustomerCandy({
            customerId: currentUserId,
            productId: productId
        })
    }

    return (
    <section className="product">
        <h4 className="product__name">{props.product.name}</h4>
        <div className="product__address">Price: ${props.product.price}</div>
        <div className='product__sqft'>Type: {props.productType.type}</div>
        <Button onClick={
            evt => {
                evt.preventDefault()
                constructCustomerCandy()
            }
        }>Purchase</Button>
    </section>
    )
}