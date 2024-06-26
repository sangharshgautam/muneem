import TopNavBar from "./components/TopNavBar";
import LeftNav from "./components/LeftNav";
import {Header} from "semantic-ui-react";
import React from "react";
import {Navigate} from "react-router-dom";

const ProtectedRoute = (props: {user: any, profile: any, setProfile: (profile: any) =>  void}) => {
    if (!props.user) {
        return <Navigate to="/moneta" replace />;
    }
    return(
    <section className="App">
        <header>
            <TopNavBar user={props.user} profile={props.profile} setProfile={props.setProfile}></TopNavBar>
        </header>
        <LeftNav/>
        <footer><Header as='h5'>© 2024 ACE-IT. All Rights Reserved.</Header></footer>
    </section>)
}
export default ProtectedRoute;