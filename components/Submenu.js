import Link from 'next/link'
import { useRouter } from 'next/router'

function submenu() {

    const router = useRouter()

    return (
         <div className='sub-menu'>
            <div className='left-menu'>
                <nav>
                    <ul>
                        <li>
                        <Link href='/m109'>
                            <a>Κύρια Συγκροτήματα</a>
                        </Link>
                        </li>
                        <li>
                        <Link href='/m109/search'>
                            <a>Αναζήτηση</a>
                        </Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className='center-menu'>
                <button onClick={() => router.back()}>&#171;</button>
            </div>
            <div className='right-menu'>
                <nav>
                    <ul>
                        <Link href='/m109/aithsh'>
                            <button>Αίτηση</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default submenu;