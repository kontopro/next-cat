import { Children } from 'react';
import Meta from '../components/meta.js'

function layout({children}) {
    return (
        <>
        <Meta />
        <header className='header'>
            <p>this is header</p>
            <nav className='nav'>nav</nav>
        </header>
        <div className='container'>
            {children}
        </div>
        <footer>
            <p>footer</p>
        </footer>
        </>
    );
}

export default layout;