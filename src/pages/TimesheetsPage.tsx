import {useLoaderData} from "react-router-dom";
import Timesheets from "../components/modules/timesheet/Timesheets";

const TimesheetsPage = () => {
    // @ts-ignore
    return <Timesheets records={useLoaderData().data}></Timesheets>
}
export default TimesheetsPage