import {Image, Menu, Segment} from 'semantic-ui-react'
import {useState} from "react";
import {googleLogout} from "@react-oauth/google";

const TopNavBar = (props: {user: any, profile: any, setProfile: (profile: any) =>  void}) => {
    const [activeItem,setActiveItem]= useState<string>("home")
    const handleItemClick = (name: string) => setActiveItem(name)
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        props.setProfile(null);
    };

    return <Segment inverted attached size='mini'>
        <Menu inverted secondary>
            <Menu.Item
                name='logo'
                active={activeItem === 'logo'}
                onClick={() => handleItemClick('logo')}
            >
                <img src="https://i.pinimg.com/474x/8f/6a/b6/8f6ab6b8e5819de6f3a7df22e2398ec5.jpg" width="35px"
                     height="35px" style={{margin: "0 auto"}} alt=""/>
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

            {props.profile && <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={() => logOut()}
                position="right"
            />
            }
            {!props.profile && <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={() => handleItemClick('login')}
                position="right"
            />}

            {/*<div className="ui horizontal list">*/}
                <div className="item">
                    <Image className="ui mini circular image" src={props.profile?.picture} alt="profile picture"/>
                    <div className="content">
                        {/*<div className="ui sub header">Molly</div>*/}
                        {props.profile?.given_name}
                    </div>
                </div>
            {/*</div>*/}
        </Menu>
    </Segment>
}
export default TopNavBar;