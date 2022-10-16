import React, {useState} from 'react';
import {useContext} from 'react';
import {AuthContext} from '../context';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Avatar, Button, Container, Grid, TextField} from '@mui/material';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Chat = () => {
    const {auth, firestore} = useContext(AuthContext);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );

    const sendMessages = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(), // get time from server
        });
        setValue('');
    };


    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50, marginTop: 20}}
                  alignItems="center"
                  justify="center"
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflow: 'auto'}}>
                    {messages?.map(message =>
                        <div
                            key={message.createdAt}
                            style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid blue' : '2px dashed red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <Grid container>
                                <Avatar src={message.photoUrl}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField
                        fullWidth
                        variant={'outlined'}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessages} variant={'outlined'}>Send</Button>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Chat;
