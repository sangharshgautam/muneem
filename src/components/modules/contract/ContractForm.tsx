import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Form, FormField,} from 'semantic-ui-react'
import {useNavigate} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {Agency, NewContract} from "../common/Models";


const ContractForm = <T extends NewContract>(props: {contract: T, handleSubmit: (contractForm: T) => void, handleCancel: () => void}) => {
    const [progress, setProgress] = useState(0)
    const [newContract, setContract] = useState<T>(props.contract)

    const [agencies, setAgencies] = useState<Agency[]>([])

    useEffect(() => {
        MonetaApi.list<Agency[]>('agency', setProgress).then(
            result => setAgencies(result.data)
        )
    }, [])
    const navigate = useNavigate()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        props.handleSubmit(newContract);
    }
    const handleCancel = (e: any) => {
        e.preventDefault()
        props.handleCancel()
    }
    const options = agencies.map(agency => {
        return {key: agency.id, text: agency.name, value: agency.id, selected:true, active: true}
    });
    return <Form>
        <FormField>
            <label>Agency/Client</label>
            <Dropdown
                placeholder='Select Agency'
                icon="umbrella"
                className='icon'
                labeled button
                selection
                options={options}
                value={newContract.agency?.id}
                onChange={(e, data) => setContract({...newContract, agency: {id: data.value as number}})}
            />
        </FormField>
        <FormField>
            <label>Start Date</label>
            <input type="date" placeholder='Start data for the contract' value={newContract.startDate} onChange={(e) => setContract({...newContract, startDate: e.target.value})}/>
        </FormField>
        <FormField>
            <label>End Date</label>
            <input type="date" placeholder='End data for the contract' value={newContract.endDate} onChange={(e) => setContract({...newContract, endDate: e.target.value})}/>
        </FormField>
        <Button type='submit' primary onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleCancel}>Cancel</Button>
    </Form>
}
export default ContractForm;