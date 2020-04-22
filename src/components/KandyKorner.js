import React from "react"
import LocationList from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export default (props) => {
    return (
        <>
            <h1>Kandy Korner</h1>
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </>
    )
}