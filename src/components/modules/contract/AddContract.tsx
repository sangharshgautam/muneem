import React, {useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {NewContract} from "../common/Models";
import {RouteProp} from "../common/RouteProp";
import ContractForm from "./ContractForm";
import MonetaApi from "../../../services/MonetaApi";
import {useNavigate} from "react-router-dom";

const AddContract = (props: RouteProp) => {
    const [contract, setContract] = useState<NewContract>({
        refId: '',
        startDate: '',
        endDate: ''
    })
    const [progress, setProgress] = useState(0)
    const navigate = useNavigate()
    const handleSubmit = (contractForm: NewContract) => {
        MonetaApi.create<NewContract>(props.resource, contractForm, setProgress).then(
            result => setContract(result.data)
        )
    }
    const handleCancel = () => {
        navigate(props.parent);
    }
    return   <Segment basic>
        <Header as='h3'>Add Contract</Header>
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
    </Segment>
}
export default AddContract;