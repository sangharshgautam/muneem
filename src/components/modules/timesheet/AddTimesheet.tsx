import React, {useState} from 'react'
import {Button, Container, Form, FormField, Header, Input, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {useNavigate} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {Timesheet} from "../common/Models";

const AddTimesheet = () => {
    const [progress, setProgress] = useState(0)
    const [record, setRecord] = useState<Timesheet>({
        psrContractId: 'PSR1JP00071991',
        startDate: '15/06/2024',
        endDate: '21/06/2024',
        units: 5,
        psrId: 'PSR1TS04070707',
        status: 'Approved'
    })
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        MonetaApi.create<Timesheet>('timesheet', record, setProgress).then(
            result => {
                setRecord(result.data);
                navigate('/muneem/moneta/timesheet');
            }

        )
    }
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
                    <label>Status</label>
                    <Input placeholder='Status'value={record.status} onChange={(e) => setRecord({...record, status: e.target.value})}/>
                </FormField>
                <FormField>
                    <label>Start Date</label>
                    <Input type="date" placeholder='Start data for the contract' value={record.startDate} onChange={(e) => setRecord({...record, startDate: e.target.value})}/>
                </FormField>
                <FormField>
                    <label>End Date</label>
                    <Input type="date" placeholder='End data for the contract' value={record.endDate} onChange={(e) => setRecord({...record, endDate: e.target.value})}/>
                </FormField>
                <FormField>
                    <Input label={{ basic: true, content: 'Days' }} placeholder='No of days' value={record.units} onChange={(e) => setRecord({...record, units: e.target.value as unknown as number})}/>
                </FormField>
                <Button type='submit' primary onClick={(e) => handleSubmit(e)}>Submit</Button>
                <Button>Cancel</Button>
            </Form>
        </Container>
    </Segment>
}
export default AddTimesheet;