import React from "react"
import Dashboard from "./Dashboard"
import { Route, Redirect } from "react-router-dom"
import Login from "./auth/Login"
import Register from "./auth/Register"

export default () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("kandy_customer")) {
                return (
                    <>
                        <Route render={props => <Dashboard {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)