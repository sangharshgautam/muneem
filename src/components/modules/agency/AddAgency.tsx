import React, {useState} from 'react'
import {Button, Container, Form, FormField, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import MonetaApi from "../../../services/MonetaApi";
import {NewAgency} from "../common/Models";
import {useNavigate} from "react-router-dom";
import {RouteProp} from "../common/RouteProp";

const AddAgency = (props: RouteProp) => {
    const [progress, setProgress] = useState(0)
    const [newAgency, setAgency] = useState<NewAgency>({
        name: 'Nasa Group',
        contact: 'Aidan Folland',
        website: 'https://www.nasagroup.co.uk/'
    })
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        MonetaApi.create<NewAgency>(props.resource, newAgency, setProgress).then(
            result => {
                setAgency(result.data);
                navigate(props.parent);
            }

        )
    }
    const handleCancel = (e: any) => {
        e.preventDefault()
        navigate(props.parent);
    }
    return   <Segment basic>
        <Header as='h3'>Add Agency</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 &&
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
                        <input placeholder='Name of the agency' value={newAgency.name} onChange={(e) => setAgency({...newAgency, name: e.target.value})}/>
                    </FormField>
                    <FormField>
                        <label>Contact</label>
                        <input placeholder='Contact person at the agency' value={newAgency.contact} onChange={(e) => setAgency({...newAgency, contact: e.target.value})}/>
                    </FormField>
                    <FormField>
                        <label>Website</label>
                        <input placeholder='Url of the agency company' value={newAgency.website} onChange={(e) => setAgency({...newAgency, website: e.target.value})}/>
                    </FormField>
                    <Button type='submit' primary onClick={handleSubmit}>Submit</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                </Form>
            </Container>
        }
    </Segment>
}
export default AddAgency;