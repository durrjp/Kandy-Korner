import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const salary = useRef()
    const manager = useRef()
    const fullTime = useRef()


    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        const moneyPerHour = parseInt(salary.current.value)
        let managerBoolean= ""
        if (parseInt(manager.current.value) !== 0) {
            parseInt(manager.current.value) === 1 ? managerBoolean=true: managerBoolean=false
        } else {
            alert("Please select a location")
        }
        let fullTimeBoolean=""
        if (parseInt(fullTime.current.value) !== 0) {
            parseInt(fullTime.current.value) === 1 ? fullTimeBoolean=true: fullTimeBoolean=false
        } else {
            alert("Please select a location")
        }

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                manager: managerBoolean,
                fullTime: fullTimeBoolean,
                salary: moneyPerHour
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Manager Position: </label>
                    <select
                        defaultValue="No"
                        name="location"
                        ref={manager}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select manager designation</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Full-time or Part-Time: </label>
                    <select
                        defaultValue="No"
                        name="fullTime"
                        ref={fullTime}
                        id="employeeFullTime"
                        className="form-control"
                    >
                        <option value="0">Select full-time or part-time</option>
                        <option value="1">Full-time</option>
                        <option value="2">Part-time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeSalary">Employee salary per hour: </label>
                    <input
                        type="text"
                        id="employeeSalary"
                        ref={salary}
                        required
                        autoFocus
                        classSalary="form-control"
                        placeholder="Employee salary"
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                        props.toggler()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}