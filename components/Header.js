import Link from 'next/link';
import {useRouter} from 'next/router';

function Header({children}) {

    const {basePath}  = useRouter();

    return (
        <header className='header'>
            <div className='top-header'>
                <div className='logo'>
                    <p><img src={`${basePath}/KEY.jpg`} width='100' height='50'/></p>
                </div>
                <div className='site-title'>
                    <h1 className='title'>Ηλεκτρονικοί Κατάλογοι</h1>
                </div>
            </div>
            <nav className='nav btm-header'>
                <ul>
                    <li>
                    <Link href='/'>Αρχική</Link>
                    </li>
                    <li className='no-mobile'>
                    <Link  href='/oxhmata'>Οχήματα</Link>
                    </li>
                    <li className='no-mobile'>
                    <Link  href='/armata'>Άρματα</Link>
                    </li>
                    <li className='no-mobile'>
                    <Link  href='/pirovola'>Πυροβόλα</Link>
                    </li>
                    <li className='no-mobile'>
                    <Link  href='/oplismos'>Οπλισμός</Link>
                    </li>
                    <li className='no-mobile'>
                    <Link  href='/dioptres'>Διόπτρες</Link>
                    </li>
                    <li className='no-mobile'>
                    <Link  href='/genika'>Γενικά Υλικά</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;