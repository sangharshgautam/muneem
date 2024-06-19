import React from 'react'
import {Button, Container, Form, FormField, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'

const AddTimesheet = () => {
    return   <Segment basic>
        <Header as='h3'>Add Timesheet</Header>
        <Container>
            <Message>
                <MessageHeader>Changes in Service</MessageHeader>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
            </Message>
            <Form>
                <FormField>
                    <label>Agency/Client</label>
                    <input placeholder='Umbrella/Agency/Client' />
                </FormField>
                <FormField>
                    <label>Start Date</label>
                    <input type="date" placeholder='Start data for the contract' />
                </FormField>
                <FormField>
                    <label>End Date</label>
                    <input type="date" placeholder='End data for the contract'/>
                </FormField>
                <Button type='submit' primary>Submit</Button>
                <Button>Cancel</Button>
            </Form>
        </Container>
    </Segment>
}
export default AddTimesheet;