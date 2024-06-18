import React from 'react';
import {
    Container,
    Header,
    Icon,
    Image,
    Menu,
    MenuItem,
    Segment,
    Sidebar,
    SidebarPushable,
    SidebarPusher
} from 'semantic-ui-react'
import Main from "./Main";

const LeftNav = () =>  {
    const items = [
        {name: 'home'},
        {name: 'gamepad'},
        {name: 'camera'}
    ];
    return (
        <Container>
            <SidebarPushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    direction='left'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                >
                    {items.map(item => <MenuItem as='a'>
                        <Icon name='home' />
                        {item.name}
                    </MenuItem>)}
                </Sidebar>
                <SidebarPusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

                    </Segment>
                    <Segment basic>

                        <Main></Main>

                    </Segment>

                </SidebarPusher>
            </SidebarPushable>
        </Container>
    )
}

export default LeftNav;
