import React from 'react';
import {CircularProgress, Grid} from '@mui/material';

const Loader = () => {
    return (

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
            <CircularProgress/>
        </Grid>
    );
};

export default Loader;
