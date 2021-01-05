import Meta from '../components/meta.js'
import Link from 'next/link';

function layout({children}) {
    return (
        <>
        <Meta />
        <header className='header'>
            <div className='top-header'>
                <div className='logo'>
                    <p><img src='/KEY.jpg' width='100' height='50'/></p>
                </div>
                <div className='site-title'>
                    <h1 className='title'>Ηλεκτρονικοί Κατάλογοι</h1>
                </div>
            </div>
            <nav className='nav btm-header'>
                <ul>
                    <Link href='/'>Αρχική</Link>
                    <Link href='/m109'>Οχήματα</Link>
                    <Link href='/m109'>Άρματα Μάχης</Link>
                    <Link href='/m109'>Πυροβόλα</Link>
                    <Link href='/m109'>Οπλισμός</Link>
                </ul>
            </nav>
        </header>
        <div className='container'>
            {children}
        </div>
        <footer>
            <p>ΚΕΥ 2021</p>
        </footer>
        </>
    );
}

export default layout;