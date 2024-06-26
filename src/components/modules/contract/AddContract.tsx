import React, {useEffect, useState} from 'react'
import {Button, Container, Dropdown, Form, FormField, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {Agency, Contract} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";

const AddContract = () => {
    const [progress, setProgress] = useState(0)
    const [newContract, setContract] = useState<Contract>({
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
    const options = agencies.map(agency => {
        return {key: agency.id, text: agency.name, value: agency.id}
    });
    return   <Segment basic>
        <Header as='h3'>Add Contract</Header>
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
                        <label>Agency/Client</label>
                        <Dropdown text='Select Agency' icon="umbrella" options={options} onChange={(e, data) => setContract({...newContract, agencyId: data.value as number})} labeled button className='icon' />
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
        }
    </Segment>
}
export default AddContract;