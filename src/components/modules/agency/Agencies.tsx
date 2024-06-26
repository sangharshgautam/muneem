import React, {useEffect, useState} from 'react';
import {
    Button,
    Header,
    Icon,
    Label,
    Segment,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow
} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {Agency} from "../common/Models";

const Agencies = () => {
    const [progress, setProgress] = useState(0)
    const [records, setRecords] = useState<Agency[]>([])
    const loadAgencies =  () => {
        MonetaApi.list<Agency[]>('agency', setProgress).then(
            result => setRecords(result.data)
        )
    }
    useEffect(() => {
        loadAgencies()
    }, [])
    const [agency, setAgency] = useState<{redirect: boolean, agency: Agency | undefined}>({redirect: false, agency: undefined})
    const viewAgency = (agency: Agency) => {
        setAgency({
            redirect: true,
            agency
        })
    }
    const deleteAgency = (id: string | undefined) => {
        if(id){
            MonetaApi.delete<string>('agency', id, setProgress).then(
                result => loadAgencies()
            )
        }
    }
    return <Segment basic>
        <Header as='h3'>Agency</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 && <Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Contact</TableHeaderCell>
                    <TableHeaderCell>Website</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="name">
                        {/*
                        // @ts-ignore */}
                        <Label ribbon={record.id === "1"}>{record.name}</Label>
                    </TableCell>
                    <TableCell key="contact">{record.contact}</TableCell>
                    <TableCell key="website">{record.website}</TableCell>
                    <TableCell key="action">
                        <Button as={NavLink} to="1" size='small' positive icon="right arrow"></Button>
                        <Button size='small' negative icon="trash" onClick={() => deleteAgency(record.id)}></Button>
                    </TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='4'>
                        <Button as={NavLink} to="add" size='small' primary floated='right'><Icon name='add' />Add Agency</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>}
    </Segment>
}
export default Agencies;