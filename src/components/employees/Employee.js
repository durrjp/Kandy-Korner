import React from "react"
import "./Employee.css"

export default (props) => {

    return (
    <section className="employee">
        <h4 className="employee__name">{props.employee.name}</h4>
        <div className="employee__location">{props.loc.name}</div>
    </section>
    )
}