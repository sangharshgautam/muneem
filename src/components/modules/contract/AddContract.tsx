import React, {useEffect, useState} from 'react'
import {Button, Container, Dropdown, Form, FormField, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {Agency, agencyIdentifier, Contract} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";

const AddContract = () => {
    const [progress, setProgress] = useState(0)
    const [newContract, setContract] = useState<Contract>({
        agency: agencyIdentifier("1"),
        startDate: '',
        endDate: ''
    })

    const [agencies, setAgencies] = useState<Agency[]>([])
    useEffect(() => {
        MonetaApi.list<Agency[]>('agency', setProgress).then(
            result => setAgencies(result.data)
        )
    }, [])
    const handleSubmit = (e: any) => {
        e.preventDefault()
        MonetaApi.create<Contract>('contract', newContract, setProgress).then(
            result => setContract(result.data)
        )
    }
    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
    ]
    return   <Segment basic>
        <Header as='h3'>Add Contract</Header>
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
                    <Dropdown text='Dropdown' icon="umbrella" options={options} renderLabel={(item, index, defaultLabelProps) => 'ABC'} labeled button className='icon' />
                    {/*<Input placeholder='Agency/Agency/Client' />*/}
                </FormField>
                <FormField>
                    <label>Start Date</label>
                    <input type="date" placeholder='Start data for the contract' onChange={(e) => setContract({...newContract, startDate: e.target.value})}/>
                </FormField>
                <FormField>
                    <label>End Date</label>
                    <input type="date" placeholder='End data for the contract' onChange={(e) => setContract({...newContract, endDate: e.target.value})}/>
                </FormField>
                <Button type='submit' primary onClick={(e) => handleSubmit(e)}>Submit</Button>
                <Button>Cancel</Button>
            </Form>
        </Container>
    </Segment>
}
export default AddContract;