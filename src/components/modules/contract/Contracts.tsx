import {
    Button,
    Header, Icon,
    Image,
    Label,
    Segment, Table,
    TableBody,
    TableCell, TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import React from "react";

const Contracts = () => {
    const records = [
        {
            umbrella:{
                id: 1,
                name: 'Nasa Group'
            },
            id: 1,
            start: '12/07/2021',
            end: '12/07/2023'
        },
        {
            umbrella:{
                id: 1,
                name: 'Nasa Group'
            },
            id: 2,
            start: '04/09/2023',
            end: '04/08/2024'
        }
    ]
    return  <Segment basic>
        <Header as='h3'>Contracts</Header>
        <Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Client/Agency</TableHeaderCell>
                    <TableHeaderCell>Start</TableHeaderCell>
                    <TableHeaderCell>End</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="name">
                        <Label ribbon={record.id === 1}>{record.umbrella.name}</Label>
                    </TableCell>
                    <TableCell key="start">{record.start}</TableCell>
                    <TableCell key="end">{record.end}</TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='3'>
                        <Button as={NavLink} to="/muneem/contract/add" size='small' primary><Icon name='add' /> Add</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
    </Segment>
}
export default Contracts;