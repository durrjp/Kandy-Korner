import React, { useContext, useState } from "react"
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"
import { LocationContext } from "../locations/LocationProvider"
import EmployeeForm from "./EmployeeForm"

export default () => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <>
            <div className="employees">
                <h2>Employees</h2>
                <Button className="fakeLink href" onClick={toggle}>New Employee</Button>
                <article className="employeeList">
                    {
                        employees.map(emp =>{
                            const matchingLocation = locations.find(loc => emp.locationId === loc.id)
                            return <Employee key={emp.id} employee={emp} loc={matchingLocation} />
                        })
                    }
                </article>
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}