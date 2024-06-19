import React from 'react';
import {
    Button,
    Header, Icon,
    Label,
    Segment,
    Table,
    TableBody,
    TableCell, TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow
} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";

const Umbrellas = () => {
    const records = [
        {id: 1, name: 'Nasa', contact: 'Mike Bulow', website: 'http://www.nasa.com'},
        {id: 2, name: 'Wipro', contact: 'John Mike', website: 'http://www.wipro.com'}
    ]
    return <Segment basic>
        <Header as='h3'>Umbrella</Header>
        <Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Contact</TableHeaderCell>
                    <TableHeaderCell>website</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="name">
                        <Label ribbon={record.id === 1}>{record.name}</Label>
                    </TableCell>
                    <TableCell key="contact">{record.contact}</TableCell>
                    <TableCell key="website">{record.website}</TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='3'>
                        <Button as={NavLink} to="add" size='small' primary><Icon name='add' /> Add</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
    </Segment>
}
export default Umbrellas;