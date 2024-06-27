import React, {useEffect, useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {Contract} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";
import {useNavigate, useParams} from "react-router-dom";
import {RouteProp} from "../common/RouteProp";
import ContractForm from "./ContractForm";

const EditContract = (props: RouteProp) => {
    const routeParams = useParams<{id: string}>();
    const [contract, setContract] = useState<Contract>()
    const [progress, setProgress] = useState(0)

    const navigate = useNavigate()

    const handleSubmit = (contractForm: Contract) => {
        MonetaApi.save<Contract>(props.resource, contractForm, setProgress).then(
            result => setContract(result.data)
        )
    }
    const handleCancel = () => {
        navigate(props.parent);
    }
    useEffect(() => {
        if(routeParams.id){
            MonetaApi.get<Contract>(props.resource, routeParams.id, setProgress).then(
                result => {
                    setContract(result.data);
                }
            )
        }
    }, [routeParams, props.resource]);
    return   <Segment basic>
        <Header as='h3'>Edit Contract</Header>
        {progress !== 100 && <div className="ui indicating progress" data-value={progress} data-total="100">
            <div className="bar"></div>
            <div className="label">Loading Contract</div>
        </div>}
        {progress === 100 && contract &&
            <Container>
                <Message>
                    <MessageHeader>Changes in Service</MessageHeader>
                    <p>
                        We updated our privacy policy here to better service our customers. We
                        recommend reviewing the changes.
                    </p>
                </Message>
                <ContractForm contract={contract} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
            </Container>
        }
    </Segment>
}
export default EditContract;