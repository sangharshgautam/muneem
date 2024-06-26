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
} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Contract} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";

const Contracts = () => {
    const [progress, setProgress] = useState(0)
    const [records, setRecords] = useState<Contract[]>([])
    useEffect(() => {
        MonetaApi.list<Contract[]>('contract', setProgress).then(
            result => setRecords(result.data)
        )
    }, [])
    return  <Segment basic>
        <Header as='h3'>Contracts</Header>
        <Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Client/Agency</TableHeaderCell>
                    <TableHeaderCell>Start Date</TableHeaderCell>
                    <TableHeaderCell>End Date</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="name">
                        <Label ribbon={record.id === 1}>{record.agency?.name}</Label>
                    </TableCell>
                    <TableCell key="start">{record.startDate}</TableCell>
                    <TableCell key="end">{record.endDate}</TableCell>
                    <TableCell key="action">
                        <Button as={NavLink} to="1" size='small' positive icon="right arrow"></Button>
                        <Button size='small' negative icon="trash"></Button>
                    </TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='4'>
                        <Button as={NavLink} to="add" size='small' primary floated='right'><Icon name='add' />Add Contract</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
    </Segment>
}
export default Contracts;