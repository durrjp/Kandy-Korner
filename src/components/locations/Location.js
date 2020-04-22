import React from "react"
import "./Location.css"

export default (props) => {
    const isHandiAccess = () => {
        var checkmark = "\u2714"
        if (props.location.handicap === true) {
            return checkmark
        } else {
            return "\u274c"
        }
    }
    return (
    <section className="location">
        <h4 className="location__name">{props.location.name}</h4>
        <div className="location__address">Address: {props.location.address}</div>
        <div className='location__sqft'>Square Feet: {props.location.sqft}</div>
        <div className="location__handicap">Handicap Accessible: {isHandiAccess()}</div>
    </section>
    )
}