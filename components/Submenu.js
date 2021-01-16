import Link from 'next/link'
import { useRouter } from 'next/router'

function submenu({kyrio}) {

    const router = useRouter()

    return (
         <div className='sub-menu'>
            <div className='left-menu'>
                <nav>
                    <ul>
                        <li>
                        <Link href={`/${kyrio}`}>
                            <a>Κύρια Συγκροτήματα</a>
                        </Link>
                        </li>
                        <li>
                        <Link href={`/${kyrio}/tree`}>
                            <a>Δενδρική Μορφή</a>
                        </Link>
                        </li>
                        <li>
                        <Link href={`/${kyrio}/search`}>
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
                        <Link href={`/${kyrio}/aithsh`}>
                            <button>Αίτηση</button>
                        </Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default submenu;