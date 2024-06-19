import {Container, Header, Message, MessageHeader, Segment} from "semantic-ui-react";
import React from "react";
import CashFlow from "./CashFlow";

const Dashboard = () => {
    return  <Segment basic>
        <Header as='h3' dividing>Dashboard</Header>
        <Container fluid>
            <Message>
                <MessageHeader>Changes in Service</MessageHeader>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
            </Message>
            <CashFlow></CashFlow>
        </Container>
    </Segment>
}
export default Dashboard;