import React, {useState} from 'react';
import {
    Button,
    Header,
    Icon,
    Segment,
    Table,
    TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow
} from 'semantic-ui-react'
import {NavLink, useLoaderData} from "react-router-dom";
import {Agency} from "../components/modules/common/Models";
import Contracts from "../components/modules/contract/Contracts";

const ViewAgencyPage = () => {
    const loaderData = useLoaderData();
    // @ts-ignore
    const [agency] = useState<Agency>(loaderData[0].data)

    return <>
        <Segment basic>
            <Header as='h3'>Agency: {agency?.name}</Header>
            <Table celled>
                <TableHeader>
                    {/*
                    // @ts-ignore */}
                    {Object.getOwnPropertyNames(agency).filter(prop => (typeof agency?.[`${prop}`] === 'string') ).map(prop =>
                        <TableRow key={prop}>
                            <TableHeaderCell>{prop}</TableHeaderCell>
                            {/*
                            // @ts-ignore */}
                            <TableHeaderCell>{agency?.[`${prop}`]}</TableHeaderCell>
                        </TableRow>
                    )}
                </TableHeader>
                <TableFooter fullWidth>
                    <TableRow>
                        <TableHeaderCell colSpan='3'>
                            <Button as={NavLink} to="edit" size='small' primary floated='right'><Icon name='edit' /> Edit</Button>
                            {/*<Button as={NavLink} to="/moneta/secure/contract/add" size='small' primary floated='right'><Icon name='add' /> Add Contract</Button>*/}
                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Segment>
        {/*
        // @ts-ignore */}
        <Contracts records={loaderData[1].data} />
    </>
}
export default ViewAgencyPage;