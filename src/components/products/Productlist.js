import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Product.css"
import { ProductTypeContext } from "./ProductTypeProvider"

export default () => {
    const { products } = useContext(ProductContext)
    const { productTypes } = useContext(ProductTypeContext)

    return (
        <div className="products">
            <h2>Products</h2>
            <article className="productList">
                {
                    products.map(pro =>{
                        const matchingProdType = productTypes.find(proType => proType.id === pro.productTypeId)
                        return <Product key={pro.id} product={pro} productType={matchingProdType} />})
                }
            </article>
        </div>
    )
}