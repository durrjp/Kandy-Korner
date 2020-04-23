import React from "react"
import { Button } from "reactstrap"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import Productlist from "./products/Productlist"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employees/EmployeeList"

export default (props) => {
    return (
        <>
            <h1>Kandy Korner</h1>
            {
                localStorage.getItem("kandy_customer")
                    ?
                        <Button
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("kandy_customer")
                                props.toggle()
                            }}
                        >Logout</Button>
                    
                    : ""
            }
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

