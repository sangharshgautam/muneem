import React from 'react'
import {Button, Container, Form, FormField, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'

const AddUmbrella = () => {
    return   <Segment basic>
        <Header as='h3'>Add Umbrella</Header>
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
                <label>Name</label>
                <input placeholder='Name of the umbrella' />
            </FormField>
            <FormField>
                <label>Contact</label>
                <input placeholder='Contact person at the umbrella' />
            </FormField>
            <FormField>
                <label>Website</label>
                <input placeholder='Url of the umbrella company'/>
            </FormField>
            <Button type='submit' primary>Submit</Button>
            <Button>Cancel</Button>
        </Form>
    </Container>
    </Segment>
}
export default AddUmbrella;