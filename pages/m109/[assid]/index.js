import Link from 'next/link';
import Submenu from '../../../components/Submenu'
import masters from '../../../data/master-m109.json'

function Assembly({ assembly }) {

  const listItems = assembly.menuItem.length ? assembly.menuItem.map(item => <div key={item.id} className='card'>
    <Link href={`/m109/sub/${item.id}`}>
      <a>{item.caption}</a>
    </Link>
  </div>
  ) : <div className='card'><Link href={`/m109/sub/${assembly.menuItem.id}`}>
    <a>{assembly.menuItem.caption}</a>
  </Link></div>;

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