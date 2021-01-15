import Link from 'next/link';
import Submenu from '../../../components/Submenu'
import masters from '../../../data/master-m109.json'
import {useRouter} from 'next/router';

function Assembly({ assembly }) {

// Παίρνω το σημείο της τελευταίας καθέτου/
const ews = useRouter().asPath.lastIndexOf('/')-1
// Παίρνω το υπόλοιπο στρινκ
const str = useRouter().asPath.substr(0,ews)
// Βρίσκω το μήκος του Κυρίου Υλικού
const lr = str.lastIndexOf('/')-1

// Βρίσκω το ΚΥ, πχ m109, ms290, κλπ
const ky = useRouter().asPath.substr(1,lr)

// console.log(useRouter().asPath.substr(1,).indexOf('/'))
console.log(ky)



  const listItems = assembly.menuItem.length ? assembly.menuItem.map(item => 
    <Link href={`/${ky}/sub/${item.id}`} key={item.id}  >
      <div  className='card'>
      <p>{item.caption}</p>
  </div>
    </Link>
  ) : 
    <Link href={`/${ky}/sub/${assembly.menuItem.id}`} key={assembly.id}  >
  <div className='card'>
    <a>{assembly.menuItem.caption}</a>
  </div>
  </Link>;

  return (
    <>
    <Submenu />
    <main>
      <p>{assembly.caption}</p>
      <p> &nbsp;(Υποσυγκροτήματα: {assembly.menuItem.length ? assembly.menuItem.length : `1`})</p>
      <div className='cards-wrapper'>
        {listItems}
      </div>
    </main>
    </>
  );
}

export const getStaticPaths = async () => {

  const paths = masters.map((assembly) => ({
    params: { assid: assembly.id.toString() }
  }))

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params}) => {
  
  const assembly = masters.find(({id}) => id === params.assid)

  return {
    props:{
      assembly
    }
  }
}

export default Assembly