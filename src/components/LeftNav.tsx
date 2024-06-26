import React, {useState} from 'react';
import {Icon, Menu, MenuItem, Segment, Sidebar, SidebarPushable, SidebarPusher} from 'semantic-ui-react'
import {NavLink, Outlet, Route, Routes, useRoutes} from "react-router-dom";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";
import Agencies from "./modules/agency/Agencies";
import Contracts from "./modules/contract/Contracts";
import Dashboard from "./modules/dashboard/Dashboard";
import AddAgency from "./modules/agency/AddAgency";
import AddContract from "./modules/contract/AddContract";
import Settings from "./modules/settings/Settings";
import AddTimesheet from "./modules/timesheet/AddTimesheet";
import Timesheets from "./modules/timesheet/Timesheets";
import ViewAgency from "./modules/agency/ViewAgency";
import AppRoutes from "./AppRoutes";

const LeftNav = (props: {user: any}) =>  {
    const items = [
        {id: 1, label: 'Dashboard', icon: 'dashboard', route: 'dashboard'},
        {id: 2, label: 'Agency', icon: 'umbrella', route: 'agency'},
        {id: 3, label: 'Contract', icon: 'mail', route: 'contract'},
        {id: 4, label: 'Timesheet', icon: 'clock', route: 'timesheet'},
        {id: 5, label: 'Settings', icon: 'settings', route: 'settings'}
    ];
    const [activeMenu, setActiveMenu] = useState<number>(1)

    const bradcrumb = [
        {name: 'Agency', route: '/muneem/moneta/agency'}
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
                <AppRoutes/>
            </SidebarPusher>
        </SidebarPushable>
    )
}

export default LeftNav;
