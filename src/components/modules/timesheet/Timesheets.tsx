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

const Timesheets = () => {
    const [progress, setProgress] = useState(0)
    const [records, setRecords] = useState<Timesheet[]>([])
    useEffect(() => {
        MonetaApi.list<Timesheet[]>('timesheet', setProgress).then(
            result => setRecords(result.data)
        )
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
                    <TableHeaderCell>Client/Agency</TableHeaderCell>
                    <TableHeaderCell>Start</TableHeaderCell>
                    <TableHeaderCell>End</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="name">
                        {/*<Label ribbon={record.id === 1}>{record.agency.name}</Label>*/}
                    </TableCell>
                    <TableCell key="startDate">{record.startDate}</TableCell>
                    <TableCell key="endDate">{record.endDate}</TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='3'>
                        <Button as={NavLink} to="add" size='small' primary floated='right'><Icon name='add' />Add Timesheet</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
        }
    </Segment>
}
export default Timesheets;