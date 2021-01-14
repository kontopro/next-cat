import Link from 'next/link';
import Submenu from '../../components/Submenu'
import assemblies from '../../data/master-m109.json'
import {useRouter} from 'next/router';

function Assemblies({assemblies}) {

  const {basePath}  = useRouter();
  const ky = useRouter().pathname.substr(1, );
  console.log(ky)

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