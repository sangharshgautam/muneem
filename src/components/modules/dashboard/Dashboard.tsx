import {Header, Segment} from "semantic-ui-react";
import React from "react";
import CashFlow from "./CashFlow";

const Dashboard = () => {
    return  <Segment basic>
        <Header as='h3' dividing>Dashboard</Header>
        <CashFlow></CashFlow>
    </Segment>
}
export default Dashboard;