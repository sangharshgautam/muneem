import {Menu, Segment} from 'semantic-ui-react'
import {useState} from "react";

const NavBar = () => {
    const [activeItem,setactiveItem]= useState<string>("home")
    const handleItemClick = (name: string) => setactiveItem(name)
    return <Segment inverted attached size='mini'>
        <Menu inverted secondary>
            <Menu.Item
                name='logo'
                active={activeItem === 'logo'}
                onClick={() => handleItemClick('logo')}
            >
                <img src="ghostblog.svg"  width="35px" height="35px" style={{ margin: "0 auto" }}  alt="" />
            </Menu.Item>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={() => handleItemClick('home')}
            />
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={() => handleItemClick('messages')}
            />
            <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={() => handleItemClick('friends')}
            />
            <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={() => handleItemClick('login')}
                position="right"
            />
            <Menu.Item
                name='sign_in'
                active={activeItem === 'sign_in'}
                onClick={() => handleItemClick('sign_in')}
            />
        </Menu>
    </Segment>
}
export default NavBar;