import Meta from '../components/meta.js'

function layout({children}) {
    return (
        <>
        <Meta />
        <header className='header'>
            <p>this is header</p>
            <nav className='nav'>MAIN NAV</nav>
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