import React, {useEffect, useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {useNavigate, useParams} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {NewTimesheet, Timesheet} from "../common/Models";
import {RouteProp} from "../common/RouteProp";
import TimesheetForm from "./TimesheetForm";

const EditTimesheet = (props: RouteProp) => {
    const routeParams = useParams<{id: string}>();
    const [timesheet, setTimesheet] = useState<NewTimesheet>()
    const [progress, setProgress] = useState(0)
    const navigate = useNavigate()

    const handleSubmit = (timesheetForm: NewTimesheet) => {
        MonetaApi.create<NewTimesheet>(props.resource, timesheetForm, setProgress).then(
            result => setTimesheet(result.data)
        )
    }
    const handleCancel = () => {
        navigate(props.parent);
    }
    useEffect(() => {
        if(routeParams.id){
            MonetaApi.get<Timesheet>(props.resource, routeParams.id, setProgress).then(
                result => {
                    setTimesheet(result.data);
                }
            )
        }
    }, [routeParams, props.resource]);
    return   <Segment basic>
        <Header as='h3'>Add Timesheet</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 && timesheet && <Container>
            <Message>
                <MessageHeader>Changes in Service</MessageHeader>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
            </Message>
            <TimesheetForm timesheet={timesheet} handleSubmit={handleCancel} handleCancel={handleCancel}></TimesheetForm>
        </Container>
        }
    </Segment>
}
export default EditTimesheet;