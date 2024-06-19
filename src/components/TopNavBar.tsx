import {Menu, Segment} from 'semantic-ui-react'
import {useState} from "react";

const TopNavBar = () => {
    const [activeItem,setActiveItem]= useState<string>("home")
    const handleItemClick = (name: string) => setActiveItem(name)
    return <Segment inverted attached size='mini'>
        <Menu inverted secondary>
            <Menu.Item
                name='logo'
                active={activeItem === 'logo'}
                onClick={() => handleItemClick('logo')}
            >
                <img src="https://i.pinimg.com/474x/8f/6a/b6/8f6ab6b8e5819de6f3a7df22e2398ec5.jpg"  width="35px" height="35px" style={{ margin: "0 auto" }}  alt="" />
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
export default TopNavBar;