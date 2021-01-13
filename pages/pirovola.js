import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Home() {

  const {basePath} = useRouter();

  return (
    <main className='home'>
      <h3>Επιλέξτε Πυροβόλο</h3><p>(προς το παρόν διαθέσιμο μόνο το M109)</p>
      <Link href='/m109'>
        <div className='cards-wrapper'>
        <div className='card'>
          <div className='card-image'>
          <p><img src={`${basePath}/images-m109/000.jpg`} /></p>
          </div>
          <div className='card-footer'>
          <p>M109</p>
          </div>
        </div>
        </div>
      </Link>
    </main>
  )
}
