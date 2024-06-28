import React from 'react';
import ViewItemSection from "../ViewItemSection";

const ViewTimesheetPage = () => {
    return <>
        <ViewItemSection />
        {/*
        // @ts-ignore */}
        {/*<React.Suspense fallback={<OutletContentLoading resource="timesheets" />}><Await resolve={useLoaderData().listResponse} errorElement={<OutletContentError />}>{(listResponse) => (<Timesheets records={listResponse.data} />)}</Await></React.Suspense>*/}
    </>
}
export default ViewTimesheetPage;