import {Outlet, useRoutes} from "react-router-dom";
import Settings from "./modules/settings/Settings";
import Agencies from "./modules/agency/Agencies";
import AddAgency from "./modules/agency/AddAgency";
import ViewAgency from "./modules/agency/ViewAgency";
import Dashboard from "./modules/dashboard/Dashboard";
import Contracts from "./modules/contract/Contracts";
import AddContract from "./modules/contract/AddContract";
import ViewContract from "./modules/contract/ViewContract";
import Timesheets from "./modules/timesheet/Timesheets";
import AddTimesheet from "./modules/timesheet/AddTimesheet";
import ViewTimesheet from "./modules/timesheet/ViewTimesheet";
import EditContract from "./modules/contract/EditContract";

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <Outlet/>,
            children: [
                {index: true, element: <Dashboard/>},
                {path: 'dashboard', element: <Dashboard/>},
                {
                    path: 'agency',
                    element: <Outlet/>,
                    children: [
                        {index: true, element: <Agencies resource="agency"/> },
                        {path: 'add', element: <AddAgency resource="agency" parent="/moneta/secure/agency"/>},
                        {path: ':id', element: <ViewAgency/>},
                    ]
                },
                {
                    path: 'contract',
                    element: <Outlet/>,
                    children: [
                        {index: true, element: <Contracts resource="contract"/>},
                        {path: 'add', element: <AddContract resource="contract" parent="/moneta/secure/contract"/>},
                        {path: ':id/edit', element: <EditContract resource="contract" parent="/moneta/secure/contract"/>},
                        {path: ':id', element: <ViewContract/>},
                    ]
                },
                {
                    path: 'timesheet',
                    element: <Outlet/>,
                    children: [
                        {index: true, element: <Timesheets resource="timesheet" />},
                        {path: 'add', element: <AddTimesheet resource="timesheet" parent="/moneta/secure/timesheet"/>},
                        {path: ':id', element: <ViewTimesheet resource="timesheet" parent="/moneta/secure/timesheet"/>},
                    ]
                },
                {path: 'settings', element: <Settings/>}
            ]
        }
    ]);
    return routes;
}
export default AppRoutes;