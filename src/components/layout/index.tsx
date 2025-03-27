import Sidebar from './sidebar';
import { PropsWithChildren } from 'react';
import Page from './Page';
import { useOutlet } from 'react-router';

const Layout = (props: PropsWithChildren<unknown>) => { 
    const outlet = useOutlet();
    // membalikan children2 yang ada di path nya pada layout

    return (
        <div>
            <Sidebar />
            <Page>{outlet}</Page>
            
        </div>
    );   
}

export default Layout;