import React, {useEffect, useState} from 'react';
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
import {NavLink, useParams} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {Agency} from "../common/Models";

const ViewAgency = () => {
    const routeParams = useParams<{id: string}>();
    const [agency, setAgency] = useState<Agency>()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if(routeParams.id){
            MonetaApi.get<Agency>('agency', routeParams.id, setProgress).then(
                result => {
                    setAgency(result.data);
                }
            )
        }
    }, [routeParams]);
    return <Segment basic>
        <Header as='h3'>Agency: {agency?.name}</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 && <Table celled>
            <TableHeader>
                {Object.getOwnPropertyNames(agency).map(prop =>
                    <TableRow>
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
                        <Button as={NavLink} to="add" size='small' secondary floated='left'><Icon name='edit' /> Edit</Button>
                        <Button as={NavLink} to="/moneta/contract/add" size='small' primary floated='right'><Icon name='add' /> Add Contract</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>}
    </Segment>
}
export default ViewAgency;