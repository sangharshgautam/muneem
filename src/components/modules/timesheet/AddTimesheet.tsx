import React, {useEffect, useState} from 'react'
import {
    Button,
    Container,
    Dropdown,
    Form,
    FormField,
    Header,
    Input,
    Message,
    MessageHeader,
    Segment
} from 'semantic-ui-react'
import {useNavigate} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {Contract, Timesheet} from "../common/Models";
import {RouteProp} from "../common/RouteProp";

const AddTimesheet = (prop: RouteProp) => {
    const [progress, setProgress] = useState(0)
    const [record, setRecord] = useState<Timesheet>({
        contractId: 1,
        startDate: '15/06/2024',
        endDate: '21/06/2024',
        days: 5,
        refId: 'PSR1TS04070707',
        status: 'Approved'
    })
    const [contracts, setContracts] = useState<Contract[]>([])
    useEffect(() => {
        MonetaApi.list<Contract[]>('contract', setProgress).then(
            result => setContracts(result.data)
        )
    }, [])
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        MonetaApi.create<Timesheet>('timesheet', record, setProgress).then(
            result => {
                setRecord(result.data);
                navigate(prop.parent);
            }

        )
    }
    const handleCancel = (e: any) => {
        e.preventDefault()
        navigate(prop.parent);
    }
    const options = contracts.map(contract => {
        return {key: contract.id, text: contract.refId, value: contract.id}
    });
    return   <Segment basic>
        <Header as='h3'>Add Timesheet</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 && <Container>
            <Message>
                <MessageHeader>Changes in Service</MessageHeader>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
            </Message>
            <Form>
                <FormField>
                    <label>Contract</label>
                    <Dropdown text='Select Contract' icon="mail" options={options} value={record.contractId} onChange={(e, data) => setRecord({...record, contractId: data.value as number})} labeled button className='icon' />
                    {/*<Input placeholder='Agency/Agency/Client' />*/}
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
                    <Input label={{ basic: true, content: 'Days' }} placeholder='No of days' value={record.days} onChange={(e) => setRecord({...record, days: e.target.value as unknown as number})}/>
                </FormField>
                <FormField>
                    <label>Status</label>
                    <Input placeholder='Status' value={record.status} onChange={(e) => setRecord({...record, status: e.target.value})}/>
                </FormField>
                <Button type='submit' primary onClick={(e) => handleSubmit(e)}>Submit</Button>
                <Button onClick={handleCancel}>Cancel</Button>
            </Form>
        </Container>
        }
    </Segment>
}
export default AddTimesheet;