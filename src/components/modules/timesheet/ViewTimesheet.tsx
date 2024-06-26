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
import {Timesheet} from "../common/Models";

const ViewTimesheet = () => {
    const routeParams = useParams<{id: string}>();
    const [timesheet, setTimesheet] = useState<Timesheet>()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if(routeParams.id){
            MonetaApi.get<Timesheet>('timesheet', routeParams.id, setProgress).then(
                result => {
                    setTimesheet(result.data);
                }
            )
        }
    }, [routeParams]);
    return <Segment basic>
        <Header as='h3'>Timesheet: {timesheet?.id}</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading timesheet</div>
        </div>}
        {progress === 100 && <Table celled>
            <TableHeader>
                {Object.getOwnPropertyNames(timesheet).map(prop =>
                    <TableRow>
                        <TableHeaderCell>{prop}</TableHeaderCell>
                        {/*
                        // @ts-ignore */}
                        <TableHeaderCell>{timesheet?.[`${prop}`]}</TableHeaderCell>
                    </TableRow>
                )}
            </TableHeader>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='3'>
                        <Button as={NavLink} to="add" size='small' secondary floated='left'><Icon name='edit' /> Edit</Button>
                        {/*<Button as={NavLink} to="/muneem/moneta/timesheet/add" size='small' primary floated='right'><Icon name='add' /> Add Timesheet</Button>*/}
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>}
    </Segment>
}
export default ViewTimesheet;