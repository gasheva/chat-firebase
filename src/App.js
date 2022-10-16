import './styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import AppRouter from './components/AppRouter';
import {useContext} from 'react';
import {AuthContext} from './context';
import {useAuthState} from 'react-firebase-hooks/auth';
import Loader from './components/UI/Loader/Loader';

function App() {
    const {auth} = useContext(AuthContext);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader/>;
    }
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
