import React, { useContext } from "react"
import { CustomerCandyContext } from "./CustomerCandyProvider"
import { Table } from "reactstrap"
import { ProductContext } from "../products/ProductProvider"

export default () => {
    const { ccs } = useContext(CustomerCandyContext)
    const { products } = useContext(ProductContext)
    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

    const currentCustomerCCs = ccs.filter(cc => cc.customerId === currentUserId)
    const currentCustomerProducts = currentCustomerCCs.map(cc => {
        return products.find(product => product.id === cc.productId)
    })
    const orderTableArray = []
    /* check array for property of order product name -> add new order object if not exist ->
    add current quantity + 1 and current price + order price if DOES exist
    */
    currentCustomerProducts.map(ccP => {
        const orderIndex = orderTableArray.findIndex(order => order.name === ccP.name)
        if (orderIndex === -1) {
            orderTableArray.push({
                name: ccP.name,
                quantity: 1,
                totalPrice: ccP.price
            })
        } else {
            const orderObject = orderTableArray.find(order => order.name === ccP.name)
            orderObject.quantity += 1
            orderObject.totalPrice += ccP.price
        }
    })

    return (
        <Table>
            <thead>
                <tr>
                    <th>Candy</th>
                    <th>Quantity</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderTableArray.map(order =>{
                        return (
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.quantity}</td>
                                <td>${order.totalPrice}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}