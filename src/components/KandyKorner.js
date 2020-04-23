import React from "react"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import Productlist from "./products/Productlist"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"

export default (props) => {
    return (
        <>
            <h1>Kandy Korner</h1>
            <EmployeeProvider>
                <ProductProvider>
                    <ProductTypeProvider>
                        <LocationProvider>
                            <LocationList />
                            <Productlist />
                            <EmployeeList />
                        </LocationProvider>
                    </ProductTypeProvider>
                </ProductProvider>
            </EmployeeProvider>
        </>
    )
}