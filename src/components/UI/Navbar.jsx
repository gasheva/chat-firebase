import React from 'react';
import {AppBar, Button, Grid, Toolbar} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from '../../utils/consts';

const Navbar = () => {
    const user = true;
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Grid container justify={'flex-end'}>
                    {user ?
                        <Button variant={'outlined'}>Login</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Logout</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
