import {Button, ButtonContent, Form, Grid, Header, Icon, Image, Message, Segment} from "semantic-ui-react";
import React from "react";
import {TokenResponse, useGoogleLogin} from "@react-oauth/google";

const GoogleOAuth = (props: {user: TokenResponse, setUser: (user: TokenResponse) => void}) => {

    const loginWithGoogle = useGoogleLogin({
        onSuccess: (codeResponse) => props.setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    return (<Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/muneem/logo.png'/> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='teal' fluid size='large'>
                        Login
                    </Button>
                </Segment>
                <Segment>
                    {/*<GoogleLogin onSuccess={responseMessage} />*/}
                    <Button animated color='blue' fluid size='large' onClick={() => loginWithGoogle()}>
                        <ButtonContent visible><Icon name='google'/> Login with Google</ButtonContent>
                        <ButtonContent hidden>
                            <Icon name='arrow right'/>
                        </ButtonContent>
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <Button>Sign Up</Button>
            </Message>
        </Grid.Column>
    </Grid>)
}
export default GoogleOAuth