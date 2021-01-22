import Meta from '../components/meta.js'
import Header from '../components/Header.js'

function layout({children}) {
    return (
        <>
        <Meta />
        <Header />
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