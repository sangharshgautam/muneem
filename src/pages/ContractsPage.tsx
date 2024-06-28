import {useLoaderData} from "react-router-dom";
import Contracts from "../components/modules/contract/Contracts";

const ContractsPage = () => {
    // @ts-ignore
    return <Contracts records={useLoaderData().data}></Contracts>
}
export default ContractsPage