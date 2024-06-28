import React, {useState} from 'react'
import {Container, Header, Message, MessageHeader, Segment} from 'semantic-ui-react'
import {Contract} from "../common/Models";
import MonetaApi from "../../../services/MonetaApi";
import {useLoaderData} from "react-router-dom";
import ContractForm from "./ContractForm";

const EditContract = () => {
    const loaderData = useLoaderData()
    // @ts-ignore
    const [contract, setContract] = useState<Contract>(loaderData.data)
    const [progress, setProgress] = useState(0)

    const handleSubmit = (contractForm: Contract) => {
        MonetaApi.save<Contract>('contract', contractForm, setProgress).then(
            result => setContract(result.data)
        )
    }
    const handleCancel = () => {
        // navigate(props.parent);
    }
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