import React, {useState} from "react"
import { Link } from "react-router-dom"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { LocationProvider } from "./locations/LocationProvider"
import { ProductProvider } from "./products/ProductProvider"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import Productlist from "./products/Productlist"
import LocationList from "./locations/LocationList"
import EmployeeList from "./employees/EmployeeList"
import { CustomerCandyProvider } from "./orders/CustomerCandyProvider"
import OrderList from "./orders/OrderList"
import CustomerList from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"

export default (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h1>Kandy Korner</h1>
            {
                localStorage.getItem("kandy_customer")
                    ?
                    <Link className="navbar__link"
                        to=""
                        onClick={e => {
                            e.preventDefault()
                            localStorage.removeItem("kandy_customer")
                            props.history.push("/")
                        }}
                    >Logout</Link>
                    : ""
            }
            <Button className="fakeLink href" onClick={toggle}>View Order</Button>

            <EmployeeProvider>
                <ProductProvider>
                    <ProductTypeProvider>
                        <LocationProvider>
                                <CustomerProvider>
                            <CustomerCandyProvider>
                                    <LocationList />
                                    <CustomerList />
                                    <Productlist />
                                    <EmployeeList />
                                    <Modal isOpen={modal} toggle={toggle}>
                                        <ModalHeader toggle={toggle}>
                                            Order summary
                                        </ModalHeader>
                                        <ModalBody>
                                            <OrderList toggle={toggle} />
                                        </ModalBody>
                                    </Modal>
                            </CustomerCandyProvider>
                                </CustomerProvider>
                        </LocationProvider>
                    </ProductTypeProvider>
                </ProductProvider>
            </EmployeeProvider>

            
        </>
    )
}

