import React, {useState} from 'react';
import {Icon, Menu, MenuItem, Segment, Sidebar, SidebarPushable, SidebarPusher} from 'semantic-ui-react'
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";
import Umbrellas from "./modules/umbrella/Umbrellas";
import Contracts from "./modules/contract/Contracts";
import Dashboard from "./modules/dashboard/Dashboard";
import AddUmbrella from "./modules/umbrella/AddUmbrella";
import AddContract from "./modules/contract/AddContract";
import Settings from "./modules/settings/Settings";
import Timesheet from "./modules/timesheet/Timesheet";
import AddTimesheet from "./modules/timesheet/AddTimesheet";

const LeftNav = () =>  {
    const items = [
        {id: 1, label: 'Dashboard', icon: 'dashboard', route: 'dashboard'},
        {id: 2, label: 'Umbrella', icon: 'umbrella', route: 'umbrella'},
        {id: 3, label: 'Contract', icon: 'mail', route: 'contract'},
        {id: 4, label: 'Timesheet', icon: 'clock', route: 'timesheet'},
        {id: 5, label: 'Settings', icon: 'settings', route: 'settings'}
    ];
    const [activeMenu, setActiveMenu] = useState<number>(1)

    const bradcrumb = [
        {name: 'Umbrella', route: '/muneem/secure/umbrella'}
    ];
    return (
        <SidebarPushable as={Segment} className="main">
            <Sidebar
                as={Menu}
                animation='overlay'
                direction='left'
                icon='labeled'
                vertical
                visible
            >
                {items.map(item => <MenuItem key={item.id} as={NavLink} to={item.route} active={activeMenu === item.id} onClick={() => setActiveMenu(item.id)}>
                        <Icon name={item.icon as SemanticICONS} />
                    {item.label}
                </MenuItem>)}
            </Sidebar>
            <SidebarPusher>
                <div className="ui small breadcrumb">
                    <NavLink to="/muneem" className="section">Home</NavLink>
                    {bradcrumb.map(item => <>
                        <div className="right chevron icon divider"> /</div>
                        <NavLink to={item.route} className="section">{item.name}</NavLink>
                    </>)}
                </div>
                <Routes>
                    <Route path="/" element={<Outlet/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="umbrella" element={<Outlet/>}>
                            <Route index element={<Umbrellas/>}/>
                            <Route path="add" element={<AddUmbrella/>}/>
                        </Route>
                        <Route path="dashboard" element={<Dashboard/>}/>
                        <Route path="contract" element={<Outlet/>}>
                            <Route index element={<Contracts/>}/>
                            <Route path="add" element={<AddContract/>}/>
                        </Route>
                        <Route path="timesheet" element={<Outlet/>}>
                            <Route index element={<Timesheet/>}/>
                            <Route path="add" element={<AddTimesheet/>}/>
                        </Route>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>
                </Routes>
            </SidebarPusher>
        </SidebarPushable>
    )
}

export default LeftNav;
