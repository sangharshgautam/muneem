import {
    Button,
    Header, Icon,
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

const Timesheets = () => {
    const records = [
        {
            umbrella:{
                id: 1,
                name: 'Nasa Group'
            },
            id: 1,
            start: '2021-07-12T00:00:00.001Z',
            end: '2023-07-12T023:59:59.900Z'
        },
        {
            umbrella:{
                id: 1,
                name: 'Nasa Group'
            },
            id: 2,
            start: '2023-09-04T00:00:00.001Z',
            end: '2024-08-04T023:59:59.900Z'
        }
    ]
    return  <Segment basic>
        <Header as='h3'>Timesheets</Header>
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
                        <Button as={NavLink} to="/muneem/timesheet/add" size='small' primary><Icon name='add' /> Add</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
    </Segment>
}
export default Timesheets;