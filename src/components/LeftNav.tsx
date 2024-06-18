import React, {useState} from 'react';
import {Icon, Menu, MenuItem, Segment, Sidebar, SidebarPushable, SidebarPusher} from 'semantic-ui-react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {SemanticICONS} from "semantic-ui-react/dist/commonjs/generic";
import Umbrella from "./modules/umbrella/Umbrella";
import Contract from "./modules/contract/Contract";

const LeftNav = () =>  {
    const items = [
        {id: 1, label: 'Umbrella', icon: 'umbrella'},
        {id: 2, label: 'Contracts', icon: 'mail'},
        {id: 3, label: 'camera', icon: 'camera'}
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
                {items.map(item => <MenuItem key={item.id} as='a' active={activeMenu === item.id} onClick={() => setActiveMenu(item.id)}>
                    <Icon name={item.icon as SemanticICONS} />
                    {item.label}
                </MenuItem>)}
            </Sidebar>
            <SidebarPusher>
                {/*<Segment basic>*/}
                {/*    <Header as='h3'>Application Content</Header>*/}
                {/*    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}

                {/*</Segment>*/}
                <Segment basic>

                    <BrowserRouter>
                        <Routes>
                            <Route path="/muneem" element={<Umbrella/>}>
                                <Route index element={<Umbrella/>}/>
                                {/*<Route path="flows" element={<Flow/>}/>*/}
                                <Route path="umbrella" element={<Umbrella/>}/>
                                <Route path="contract" element={<Contract/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>

                </Segment>

            </SidebarPusher>
        </SidebarPushable>
    )
}

export default LeftNav;
