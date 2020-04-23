import React, { useState, useEffect } from "react"

export const ProductContext = React.createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProducts = products => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(getProducts)
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [products])


    return (
        <ProductContext.Provider value={{
            products, addProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}