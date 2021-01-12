import Link from 'next/link';
import Submenu from '../../components/Submenu'
import assemblies from '../../data/master-m109.json'

function Assemblies({assemblies}) {

  return (
    <>
      <Submenu />
      <main className='assemblies'>
        <div className='page-title'>
          <img  src='/new-cat/icon-gears.jpg' width='35' height='35'/>
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
  
  return {
    props:{
        assemblies
    }
  }
}

export default Assemblies