import React, {useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import MonetaApi from "../services/MonetaApi";
import {Agency} from "../components/modules/common/Models";
import {useLoaderData} from "react-router-dom";
import AgencyForm from "../components/modules/agency/AgencyForm";

const EditAgencyPage = () => {
    const loaderData = useLoaderData();
    // @ts-ignore
    const [newAgency, setAgency] = useState<Agency>(loaderData.data)

    const handleSubmit = (agencyForm: Agency) => {
        MonetaApi.save<Agency>('agency', agencyForm).then(
            result => {
                setAgency(result.data);
                // navigate(props.parent);
            }
        )
    }
    const handleCancel = () => {
        // navigate(props.parent);
    }
    return   <Segment basic>
        <Header as='h3'>Add Agency</Header>
        <Container>
            <Message>
                <MessageHeader>Changes in Service</MessageHeader>
                <p>
                    We updated our privacy policy here to better service our customers. We
                    recommend reviewing the changes.
                </p>
            </Message>
            <AgencyForm agency={newAgency} handleSubmit={handleSubmit} handleCancel={handleCancel}></AgencyForm>
        </Container>
    </Segment>
}
export default EditAgencyPage;