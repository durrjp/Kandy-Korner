import React, { useState, useEffect } from "react"

export const CustomerContext = React.createContext()

export const CustomerProvider = (props) => {

    const [customers, setCustomers] = useState([])

    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomers = customers => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customers)
        })
            .then(getCustomers)
    }

    useEffect(() => {
        getCustomers()
    }, [])

    useEffect(() => {
        console.log("****  Employee APPLICATION STATE CHANGED  ****")
    }, [customers])


    return (
        <CustomerContext.Provider value={{
            customers, addCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}