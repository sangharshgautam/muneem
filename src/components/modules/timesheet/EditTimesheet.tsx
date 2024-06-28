import React, {useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {useLoaderData} from "react-router-dom";
import MonetaApi from "../../../services/MonetaApi";
import {NewTimesheet} from "../common/Models";
import TimesheetForm from "./TimesheetForm";

const EditTimesheet = () => {
    const loaderData = useLoaderData();
    // @ts-ignore
    const [timesheet, setTimesheet] = useState<NewTimesheet>(loaderData.data)
    const [progress, setProgress] = useState(0)

    const handleSubmit = (timesheetForm: NewTimesheet) => {
        MonetaApi.create<NewTimesheet>('timesheet', timesheetForm, setProgress).then(
            result => setTimesheet(result.data)
        )
    }
    const handleCancel = () => {
        // navigate(props.parent);
    }
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
            <TimesheetForm timesheet={timesheet} handleSubmit={handleSubmit} handleCancel={handleCancel}></TimesheetForm>
        </Container>
        }
    </Segment>
}
export default EditTimesheet;