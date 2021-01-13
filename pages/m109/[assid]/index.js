import Link from 'next/link';
import Submenu from '../../../components/Submenu'
import masters from '../../../data/master-m109.json'

function Assembly({ assembly }) {

  const listItems = assembly.menuItem.length ? assembly.menuItem.map(item => 
    <Link href={`/m109/sub/${item.id}`} key={item.id} >
      <div  className='card'>
      <p>{item.caption}</p>
  </div>
    </Link>
  ) : 
    <Link href={`/m109/sub/${assembly.menuItem.id}`} key={assembly.id}>
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