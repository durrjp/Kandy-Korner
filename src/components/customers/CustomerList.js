import React, { useContext } from "react"
import { Table } from "reactstrap"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCandyContext } from "../orders/CustomerCandyProvider"

export default () => {
    const { customers } = useContext(CustomerContext)
    const { ccs } = useContext(CustomerCandyContext)

    // [jon,3 (length of array of orders)]
    var orderTableArray = []
    let sortedOrders = orderTableArray.sort((a, b) => a.number - b.number)
    customers.map(customer => {
        const orderNumber = ccs.filter(cc => cc.customerId === customer.id)
        orderTableArray.push({
            name: customer.name,
            number: orderNumber.length
        })
    })
    
    return (
    <>
        <h3>Customers</h3>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Candies Bought</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedOrders.map(order =>{
                        return (
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.number}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </>
    )
}