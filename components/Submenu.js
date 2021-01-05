import Link from 'next/link'
import { useRouter } from 'next/router'

function submenu() {

    const router = useRouter()

    return (
         <div className='sub-menu'>
            <div className='left-menu'>
                <nav>
                    <ul>
                <Link href='/m109'>
                    <a>Κύρια Συγκροτήματα</a>
                </Link>
                <Link href='/m109/search'>
                    <a>Αναζήτηση</a>
                </Link>
                <button onClick={() => router.back()}>Πίσω</button>
                </ul>
                </nav>
            </div>
            <div className='right-menu'>
            <nav>
                    <ul>
                <Link href='/m109/aithsh'>
                    <a>Αίτηση</a>
                </Link>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default submenu;