import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Home() {

  const {basePath}  = useRouter();

  return (
    <main className='home'>
    <h3>Επιλέξτε Κατηγορία Υλικού</h3>
    <p>(προς το παρόν διαθέσιμη μόνο των Πυροβόλων)</p>
      <Link href='/pirovola'>
        <div className='cards-wrapper'>
        <div className='card'>
          <div className='card-image'>
          <p><img src={`${basePath}/images-m109/000.jpg`} /></p>
          </div>
          <div className='card-footer'>
          <p>Πυροβόλα</p>
          </div>
          </div>
        </div>
      </Link>
    </main>
  )
}
