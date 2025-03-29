import Sidebar from './sidebar';
import Page from './Page';
import { useOutlet } from 'react-router';
import useAuth from '../../hook/useAuth';

const Layout = () => { 
    const outlet = useOutlet();
    const user = useAuth();
    // membalikan children2 yang ada di path nya pada layou
    const { logout } = useAuth();
    const handleLogout = () => {
        console.log('logout');
        logout();
    }

    return (
        <div>
            <Sidebar user={user} onLogout={handleLogout}/>
            <Page >{outlet}</Page>
            
        </div>
    );   
}

export default Layout;