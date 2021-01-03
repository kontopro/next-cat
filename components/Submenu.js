import Link from 'next/link'
import { useRouter } from 'next/router'

function submenu() {

    const router = useRouter()

    return (
         <div className='sub-menu'>
            <div className='left-menu'>
                <nav>
                    <ul>
                <Link href='/assemblies'>
                    <a>Κύρια Συγκροτήματα</a>
                </Link>
                <button onClick={() => router.back()}>Πίσω</button>
                </ul>
                </nav>
            </div>
            <div className='right-menu'>
            <nav>
                    <ul>
                <Link href='/assemblies/aithsh'>
                    <a>Αίτηση</a>
                </Link>
                </ul>
            </nav>
            </div>
        </div>
    );
}

export default submenu;