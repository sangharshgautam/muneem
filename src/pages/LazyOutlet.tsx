import React from "react";
import {Dimmer, Loader} from "semantic-ui-react";
import {Await, useLoaderData} from "react-router-dom";
import Agencies from "../components/modules/agency/Agencies";
import Contracts from "../components/modules/contract/Contracts";
import Timesheets from "../components/modules/timesheet/Timesheets";

const LoadingOutletContent = (props: {resource: string}) => <Dimmer active><Loader inverted>Loading {props.resource}</Loader></Dimmer>
export const AgenciesPage = () => {
    // @ts-ignore
    return <React.Suspense fallback={<LoadingOutletContent resource="agencies"/>}><Await resolve={useLoaderData().listResponse} errorElement={<p>Error loading package location!</p>}>{(listResponse) => (<Agencies records={listResponse.data} />)}</Await></React.Suspense>
}
export const ContractsPage = () => {
    // @ts-ignore
    return <React.Suspense fallback={<LoadingOutletContent resource="contracts" />}><Await resolve={useLoaderData().listResponse} errorElement={<p>Error loading package location!</p>}>{(listResponse) => (<Contracts records={listResponse.data} />)}</Await></React.Suspense>
}
export const TimesheetsPage = () => {
    // @ts-ignore
    return <React.Suspense fallback={<LoadingOutletContent resource="timesheets" />}><Await resolve={useLoaderData().listResponse} errorElement={<p>Error loading package location!</p>}>{(listResponse) => (<Timesheets records={listResponse.data} />)}</Await></React.Suspense>
}


