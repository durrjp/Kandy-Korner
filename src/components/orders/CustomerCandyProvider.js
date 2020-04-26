import React, { useState, useEffect } from "react"

export const CustomerCandyContext = React.createContext()

export const CustomerCandyProvider = (props) => {

    const [ccs, setCcs] = useState([])

    const getCustomerCandys = () => {
        return fetch("http://localhost:8088/customerCandy")
            .then(res => res.json())
            .then(setCcs)
    }

    const addCustomerCandy = cc => {
        return fetch("http://localhost:8088/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cc)
        })
            .then(getCustomerCandys)
    }

    useEffect(() => {
        getCustomerCandys()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [ccs])

    return (
        <CustomerCandyContext.Provider value={{
            ccs, addCustomerCandy
        }}>
            {props.children}
        </CustomerCandyContext.Provider>
    )
}