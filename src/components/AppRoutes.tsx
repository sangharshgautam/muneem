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
                        {index: true, element: <Agencies/>},
                        {path: 'add', element: <AddAgency/>},
                        {path: ':id', element: <ViewAgency/>},
                    ]
                },
                {
                    path: 'contract',
                    element: <Outlet/>,
                    children: [
                        {index: true, element: <Contracts/>},
                        {path: 'add', element: <AddContract/>},
                        {path: ':id', element: <ViewContract/>},
                    ]
                },
                {
                    path: 'timesheet',
                    element: <Outlet/>,
                    children: [
                        {index: true, element: <Timesheets/>},
                        {path: 'add', element: <AddTimesheet/>},
                        {path: ':id', element: <ViewTimesheet/>},
                    ]
                },
                {path: 'settings', element: <Settings/>}
            ]
        }
    ]);
    return routes;
}
export default AppRoutes;