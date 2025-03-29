import Sidebar from './sidebar';
import Page from './Page';
import { useOutlet } from 'react-router';
import useAuth from '../../hook/useAuth';
import useAuthState from '../../hook/useAuthState';

const Layout = () => {
    const outlet = useOutlet();
    const user = useAuthState();
    const { logout } = useAuth();
    const handleLogout = () => {
        
      console.log("CLICKED");
      logout();
    };
    return (
      <div>
        <Sidebar user={user} onLogout={handleLogout} />
        <Page>{outlet}</Page>
      </div>
    );
  };
export default Layout;