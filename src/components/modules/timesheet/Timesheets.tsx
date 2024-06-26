import {
    Button,
    Header,
    Icon,
    Segment,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Timesheet} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";
import {RouteProp} from "../common/RouteProp";

const Timesheets = (prop: RouteProp) => {
    const [progress, setProgress] = useState(0)
    const [records, setRecords] = useState<Timesheet[]>([])

    const loadRecords = () => {
        MonetaApi.list<Timesheet[]>('timesheet', setProgress).then(
            result => setRecords(result.data)
        )
    }
    const handleDelete = (id: string | undefined) => {
        if(id){
            MonetaApi.delete<string>('timesheet', id, setProgress).then(
                result => {
                    console.log(result)
                    loadRecords()
                }
            )
        }
    }
    useEffect(() => {
       loadRecords()
    }, [])
    return  <Segment basic>
        <Header as='h3'>Timesheets</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 && <Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>RefId</TableHeaderCell>
                    <TableHeaderCell>Start</TableHeaderCell>
                    <TableHeaderCell>End</TableHeaderCell>
                    <TableHeaderCell>Days</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="refId">
                        <NavLink to={`/moneta/secure/contract/${record.contractId}`}>{record.refId}</NavLink>
                        </TableCell>
                    <TableCell key="startDate">{record.startDate}</TableCell>
                    <TableCell key="endDate">{record.endDate}</TableCell>
                    <TableCell key="days">{record.days}</TableCell>
                    <TableCell key="status">{record.status}</TableCell>
                    <TableCell key="action">
                        <Button as={NavLink} to="1" size='small' positive icon="right arrow"></Button>
                        <Button size='small' negative icon="trash" onClick={(e) => handleDelete(record.id)}></Button>
                    </TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='6'>
                        <Button as={NavLink} to="add" size='small' primary floated='right'><Icon name='add' />Add Timesheet</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
        }
    </Segment>
}
export default Timesheets;