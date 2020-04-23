import React, { useState, useEffect } from "react"

export const ProductTypeContext = React.createContext()

export const ProductTypeProvider = (props) => {

    const [productTypes, setProductTypes] = useState([])

    const getProductTypes = () => {
        return fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then(setProductTypes)
    }

    useEffect(() => {
        getProductTypes()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [productTypes])


    return (
        <ProductTypeContext.Provider value={{
            productTypes
        }}>
            {props.children}
        </ProductTypeContext.Provider>
    )
}