import React from 'react';
import {AppBar, Button, Grid, Toolbar} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from '../../utils/consts';
import {useContext} from 'react';
import {AuthContext} from '../../context';
import {useAuthState} from 'react-firebase-hooks/auth';

const Navbar = () => {
    const {auth} = useContext(AuthContext);
    const [user] = useAuthState(auth);

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justify={'flex-end'}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={'outlined'} style={{color:'white'}}>Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
