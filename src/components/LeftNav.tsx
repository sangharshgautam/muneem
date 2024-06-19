import React, {useState} from 'react';
import {Icon, Menu, MenuItem, Segment, Sidebar, SidebarPushable, SidebarPusher} from 'semantic-ui-react'
import {NavLink, Route, Routes} from "react-router-dom";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";
import Umbrella from "./modules/umbrella/Umbrella";
import Contract from "./modules/contract/Contract";
import Dashboard from "./modules/dashboard/Dashboard";

const LeftNav = () =>  {
    const items = [
        {id: 1, label: 'Dashboard', icon: 'dashboard', route: '/dashboard'},
        {id: 2, label: 'Umbrella', icon: 'umbrella', route: '/umbrella'},
        {id: 3, label: 'Contract', icon: 'mail', route: '/contract'},
        {id: 4, label: 'camera', icon: 'camera', route: '/camera'}
    ];
    const [activeMenu, setActiveMenu] = useState<number>(1)

    return (
        <SidebarPushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='push'
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
                {/*<Segment basic>*/}
                {/*    <Header as='h3'>Application Content</Header>*/}
                {/*    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}

                {/*</Segment>*/}
                <Routes>
                    <Route path="/muneem" element={<Dashboard/>} />
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/umbrella" element={<Umbrella/>}/>
                    <Route path="/contract" element={<Contract/>}/>
                </Routes>

            </SidebarPusher>
        </SidebarPushable>
    )
}

export default LeftNav;
