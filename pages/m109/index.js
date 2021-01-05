import Link from 'next/link';
import Submenu from '../../components/Submenu'

function Assemblies({assemblies}) {

  return (
    <>
      <Submenu />
      <main className='assemblies'>
        <div className='page-title'>
          <img  src='icon-gears.svg' width='35' height='35'/>
          <h1>Κύρια Συγκροτήματα</h1>
        </div>
        <div className='cards-wrapper'>
           {assemblies.map(item =>
              <div key={item.id} className='card'>
                <Link href={`/m109/${item.id}`}>
                  <a>{item.caption}</a>
                </Link>
              </div>
            )}
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  
  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master-m109.json')
  const assemblies = await res.json()

  return {
    props:{
        assemblies
    }
  }
}

export default Assemblies