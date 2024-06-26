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
import {Contract} from "../common/Models";

const ViewContract = () => {
    const routeParams = useParams<{id: string}>();
    const [contract, setContract] = useState<Contract>()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if(routeParams.id){
            MonetaApi.get<Contract>('contract', routeParams.id, setProgress).then(
                result => {
                    setContract(result.data);
                }
            )
        }
    }, [routeParams]);
    return <Segment basic>
        <Header as='h3'>Contract</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading contract</div>
        </div>}
        {progress === 100 && <Table celled>
            <TableHeader>
                {contract && Object.getOwnPropertyNames(contract).map(prop =>
                    <TableRow>
                        <TableHeaderCell>{prop}</TableHeaderCell>
                        {/*
                        // @ts-ignore */}
                        <TableHeaderCell>{contract?.[`${prop}`]}</TableHeaderCell>
                    </TableRow>
                )}
            </TableHeader>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='3'>
                        <Button as={NavLink} to="add" size='small' secondary floated='left'><Icon name='edit' /> Edit</Button>
                        <Button as={NavLink} to="/muneem/secure/timesheet/add" size='small' primary floated='right'><Icon name='add' /> Add Timesheet</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>}
    </Segment>
}
export default ViewContract;