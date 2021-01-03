import Link from 'next/link';
import Submenu from '../../../components/Submenu'

function Assembly({ assembly }) {

  const listItems = assembly.menuItem.length ? assembly.menuItem.map(item => <div key={item.id} className='card'>
    <Link href={`/assemblies/${assembly.id}/${item.id}`}>
      <a>{item.caption}</a>
    </Link>
  </div>
  ) : <div className='card'><Link href={`/assemblies/${assembly.id}/${assembly.menuItem.id}`}>
    <a>{assembly.menuItem.caption}</a>
  </Link></div>;

  return (
    <>
    <Submenu />
    <main>
      <p>{assembly.caption}</p>
      <p>Υποσυγκροτήματα: {assembly.menuItem.length ? assembly.menuItem.length : `1`}</p>
      <div className='cards-wrapper'>
        {listItems}
      </div>
    </main>
    </>
  );
}

export const getStaticPaths = async () => {

  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const assemblies = await res.json()

  const paths = assemblies.map((assembly) => ({
    params: { assid: assembly.id.toString() }
  }))

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params}) => {
  
  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const assemblies = await res.json()
  const assembly = assemblies.find(({id}) => id === params.assid)

  return {
    props:{
      assembly
    }
  }
}

export default Assembly