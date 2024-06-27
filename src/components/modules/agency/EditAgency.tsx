import React, {useEffect, useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import MonetaApi from "../../../services/MonetaApi";
import {Agency} from "../common/Models";
import {useNavigate, useParams} from "react-router-dom";
import {RouteProp} from "../common/RouteProp";
import AgencyForm from "./AgencyForm";

const EditAgency = (props: RouteProp) => {
    const routeParams = useParams<{id: string}>();
    const [progress, setProgress] = useState(0)
    const [newAgency, setAgency] = useState<Agency>()
    const navigate = useNavigate()

    const handleSubmit = (agencyForm: Agency) => {
        MonetaApi.save<Agency>(props.resource, agencyForm, setProgress).then(
            result => {
                setAgency(result.data);
                navigate(props.parent);
            }
        )
    }
    const handleCancel = () => {
        navigate(props.parent);
    }
    useEffect(() => {
        if(routeParams.id){
            MonetaApi.get<Agency>(props.resource, routeParams.id, setProgress).then(
                result => {
                    setAgency(result.data);
                }
            )
        }
    }, [routeParams]);
    return   <Segment basic>
        <Header as='h3'>Add Agency</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading agency</div>
        </div>}
        {progress === 100 && newAgency &&
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
        }
    </Segment>
}
export default EditAgency;