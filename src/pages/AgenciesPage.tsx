import {useLoaderData} from "react-router-dom";
import Agencies from "../components/modules/agency/Agencies";

const AgenciesPage = () => {
    // @ts-ignore
    return <Agencies records={useLoaderData().data}></Agencies>
}
export default AgenciesPage