import Link from 'next/link';
import Submenu from '../../components/Submenu'
import assemblies from '../../data/master-m109.json'
import {useRouter} from 'next/router';

function Assemblies({assemblies}) {

  const {basePath}  = useRouter();

  // Βρίσκω το μήκος του Κυρίου Υλικού
  const lr = useRouter().asPath.lastIndexOf('/')-1

  // Βρίσκω το ΚΥ, πχ m109, ms290, κλπ
  const ky = useRouter().asPath.substr(1,lr)

  return (
    <>
      <Submenu />
      <main className='assemblies'>
        <div className='page-title'>
          <img  src={`${basePath}/icon-gears.jpg`} width='35' height='35'/>
          <h1>Κύρια Συγκροτήματα</h1>
        </div>
        <div className='cards-wrapper'>
           {assemblies.map(item =>
                <Link href={`/${ky}/${item.id}`} key={item.id}>
              <div  className='card'>
                  <a>{item.caption}</a>
              </div>
                </Link>
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