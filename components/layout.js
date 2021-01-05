import Meta from '../components/meta.js'
import Link from 'next/link';

function layout({children}) {
    return (
        <>
        <Meta />
        <header className='header'>
            <div className='logo'><img src='/KEY.jpg' width='100' height='50'/></div>
            <h1 className='title'>Ηλεκτρονικοί Κατάλογοι 2021</h1>
            <nav className='nav'>
                <ul>
                    <Link href='/'>Αρχική</Link>
                    <Link href='/m109'>Οχήματα</Link>
                </ul>
            </nav>
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