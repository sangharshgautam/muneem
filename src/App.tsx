import React, {useEffect, useState} from 'react';
import './App.css';
import {createBrowserRouter, defer, Outlet, RouterProvider} from "react-router-dom";
import UnAuthenticated from "./components/UnAuthenticated";
import ProtectedRoute from "./ProtectedRoute";
import GoogleApi from "./services/GoogleApi";
import Dashboard from "./components/modules/dashboard/Dashboard";
import AddAgency from "./components/modules/agency/AddAgency";
import EditAgencyPage from "./pages/EditAgencyPage";
import AddContract from "./components/modules/contract/AddContract";
import ViewAgencyPage from "./pages/ViewAgencyPage";
import MonetaApi from "./services/MonetaApi";
import {Agency, Contract, Timesheet} from "./components/modules/common/Models";
import EditContract from "./components/modules/contract/EditContract";
import AddTimesheet from "./components/modules/timesheet/AddTimesheet";
import ViewContract from "./components/modules/contract/ViewContract";
import EditTimesheet from "./components/modules/timesheet/EditTimesheet";
import ViewTimesheet from "./components/modules/timesheet/ViewTimesheet";
import {AgenciesPage, ContractsPage, TimesheetsPage} from "./pages/LazyOutlet";

const loadResource = async <T,>(resource: string, id: string | number) => {
    console.log(`${resource} Loader`)
    return defer({
        record: MonetaApi.get<T>(resource, id)
    })
}

const loadResourceList = async <T,>(resource: string) => {
    console.log(`${resource} List Loader`)
    return defer({
        listResponse: MonetaApi.list<T>(resource)
    })
}

function App() {

    const [user, setUser] = useState<any | null>(null);
    const [profile, setProfile] = useState<any | null>(null);
    useEffect(
        () => {
            if (user) {
                GoogleApi.getUserInfo()
                    .then((res: any) => {
                        setProfile(res.data);
                    })
                    .catch((err: any) => console.log(err));
            }
        },
        [ user ]
    );
    const router = createBrowserRouter([
        {
            element: <h1>Moneta</h1>,
            path: "/"
        },
        {
            element: <Outlet/>,
            path: "/moneta",
            children: [
                {
                    index: true,
                    element: <UnAuthenticated user={user} setUser={setUser}/>
                },
                {
                    path: 'secure/*',
                    element: <ProtectedRoute user={user} profile={profile} setProfile={setProfile}/>,
                    children: [
                        {index: true, element: <Dashboard />},
                        {path: 'dashboard', element: <Dashboard/>},
                        {
                            path: 'agency',
                            children: [
                                {
                                    index: true, element: <AgenciesPage/>,
                                    loader: async () => loadResourceList<Agency[]>('agency')
                                },
                                {
                                    path: 'add', element: <AddAgency/>},
                                {
                                    id: 'edit-agency',
                                    path: ':id/edit', element: <EditAgencyPage/>,
                                    loader: async ({ params }) => loadResource<Agency>('agency', params.id as string)
                                },
                                {
                                    path: ':agencyId/add', element: <AddContract/>},
                                {
                                    path: ':id', element: <ViewAgencyPage/>,
                                    loader: async ({ params }) => {
                                        const id = params.id as string
                                        const agencyLoader = loadResource<Agency>('agency', id)
                                        const contractsLoader = loadResourceList<Contract[]>(`agency/${id}/contract`);
                                        return Promise.all([agencyLoader, contractsLoader]);
                                    }
                                },
                            ]
                        },
                        {
                            path: 'contract',
                            children: [
                                {
                                    index: true, element: <ContractsPage/>,
                                    loader: async () => loadResourceList<Contract[]>('contract')
                                },
                                {path: 'add', element: <AddContract/>},
                                {path: ':id/edit', element: <EditContract/>},
                                {path: ':contractId/add', element: <AddTimesheet/>},
                                {
                                    path: ':id', element: <ViewContract/>,
                                    loader: async ({ params}) => {
                                        const id = params.id as string
                                        const contractLoader = loadResource<Contract>('contract', id)
                                        const timesheetsLoader = loadResourceList<Timesheet[]>(`contract/${id}/timesheet`);
                                        return Promise.all([contractLoader, timesheetsLoader]);
                                    }
                                },
                            ]
                        },
                        {
                            path: 'timesheet',
                            children: [
                                {
                                    index: true, element: <TimesheetsPage />,
                                    loader: async () => loadResourceList<Timesheet[]>('timesheet')
                                },
                                {path: 'add', element: <AddTimesheet/>},
                                {path: ':id/edit', element: <EditTimesheet/>},
                                {path: ':id', element: <ViewTimesheet/>},
                            ]
                        }
                    ]
                }
            ],
        },
    ]);
    return <RouterProvider router={router} />
}

export default App;
