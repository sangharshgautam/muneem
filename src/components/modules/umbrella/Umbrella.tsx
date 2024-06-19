import React from 'react';
import {
    Header,
    Label,
    Segment,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from 'semantic-ui-react'

const Umbrella = () => {
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
            {/*<TableFooter>*/}
            {/*    <TableRow>*/}
            {/*        <TableHeaderCell colSpan='3'>*/}
            {/*            <Menu floated='right' pagination>*/}
            {/*                <MenuItem as='a' icon>*/}
            {/*                    <Icon name='chevron left' />*/}
            {/*                </MenuItem>*/}
            {/*                <MenuItem as='a'>1</MenuItem>*/}
            {/*                <MenuItem as='a'>2</MenuItem>*/}
            {/*                <MenuItem as='a'>3</MenuItem>*/}
            {/*                <MenuItem as='a'>4</MenuItem>*/}
            {/*                <MenuItem as='a' icon>*/}
            {/*                    <Icon name='chevron right' />*/}
            {/*                </MenuItem>*/}
            {/*            </Menu>*/}
            {/*        </TableHeaderCell>*/}
            {/*    </TableRow>*/}
            {/*</TableFooter>*/}
        </Table>
    </Segment>
}
export default Umbrella;