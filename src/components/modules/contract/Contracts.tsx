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
import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Contract} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";
import {RouteResource} from "../common/RouteProp";

const Contracts = (props: RouteResource) => {
    const [progress, setProgress] = useState(0)
    const [records, setRecords] = useState<Contract[]>([])
    const loadRecords = () => {
        const path = props.parentId ? `agency/${props.parentId}/${props.resource}` : props.resource;
        MonetaApi.list<Contract[]>(path, setProgress).then(
            result => setRecords(result.data)
        )
    }
    const handleDelete = (id: string | number | undefined) => {
        if(id){
            MonetaApi.delete<string>(props.resource, id, setProgress).then(
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
        <Header as='h3'>Contracts</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading contracts</div>
        </div>}
        {progress === 100 && <Table celled>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>RefId</TableHeaderCell>
                    <TableHeaderCell>Agency</TableHeaderCell>
                    <TableHeaderCell>Start Date</TableHeaderCell>
                    <TableHeaderCell>End Date</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {records.map(record => <TableRow key={record.id}>
                    <TableCell key="refId">
                        <NavLink to={`/moneta/secure/${props.resource}/${record.id}`}>{record.refId}</NavLink>
                    </TableCell>
                    <TableCell key="agencyId">
                        <NavLink to={`/moneta/secure/agency/${record.agency.id}`}>{record.agency.name}</NavLink>
                    </TableCell>
                    <TableCell key="start">{record.startDate}</TableCell>
                    <TableCell key="end">{record.endDate}</TableCell>
                    <TableCell key="action">
                        <Button as={NavLink} to={`/moneta/secure/${props.resource}/${record.id}/edit`} size='small' positive icon="edit"></Button>
                        <Button size='small' negative icon="trash" onClick={() => handleDelete(record.id)}></Button>
                    </TableCell>
                </TableRow>)}

            </TableBody>
            <TableFooter fullWidth>
                <TableRow>
                    <TableHeaderCell colSpan='5'>
                        <Button as={NavLink} to="add" size='small' primary floated='right'><Icon name='add' />Add Contract</Button>
                    </TableHeaderCell>
                </TableRow>
            </TableFooter>
        </Table>
        }
    </Segment>
}
export default Contracts;