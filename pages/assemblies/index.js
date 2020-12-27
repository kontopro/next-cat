import Link from 'next/link'
import master from '../../data/master.json'

export default function Assemblies() {

  const assemblies = master;

  return (
    <main className='assemblies'>
      <h1>Κύρια Συγκροτήματα</h1>
      <div className='cards-wrapper'>
      {assemblies.map(item =>
    <div key={item.id} className='card'>
      <Link href={`/assemblies/${item.id}`}>
        <a>{item.caption}</a>
      </Link>
    </div>
    )}
      </div>
    </main>
  )
}

