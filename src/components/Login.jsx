import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from '@mui/material';
import {AuthContext} from '../context';
import firebase from 'firebase/compat/app';

const Login = () => {
    const {auth} = useContext(AuthContext);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        console.log(user);
    };

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}}
                  alignItems="center"
                  justify="center"
            >
                <Grid style={{width: 400, background: 'lightgray'}}
                      container
                      flexDirection={'column'}
                      justify={'center'}
                >

                </Grid>
                <Box p={5}>
                    <Button onClick={login} variant={'outlined'}>Login with Google</Button>
                </Box>
            </Grid>
        </Container>
    );
};

export default Login;
