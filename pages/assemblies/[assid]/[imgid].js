import Link from 'next/link';
import Image from 'next/image';
import Listnsn from '../../../components/Listnsn'
import Submenu from '../../../components/Submenu'

function Imag({ imag, nsns }) {

  return (
    <>
    <Submenu />
    <main>
      <p>{imag.name}</p>
      <Image src={`/images/${imag.id}.jpg`} alt="me" width="500" height='500'  layout='intrinsic'/>
      <Listnsn details={nsns} />
    </main>
    </>
  );
}

export const getStaticPaths = async () => {

  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const assemblies = await res.json()
  const paths = assemblies.map((assembly) => assembly.menuItem.length?assembly.menuItem.map((item) => (
      { 
          params: { assid: assembly.id, imgid: item.id } 
    }
    )
    ):{params: { assid: assembly.id, imgid: assembly.menuItem.id}}
).flat()

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params}) => {
  
  const res1 = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/detail.json')
  const details = await res1.json()
  const nsns = details.filter(item => item.PictureNo === params.imgid)
  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const assemblies = await res.json()
  const assembly = assemblies.find(item => item.id === params.assid)
  const imag = assembly.menuItem.length?assembly.menuItem.find(item => item.id === params.imgid):assembly.menuItem

  return {
    props:{
      imag, 
      nsns
    }
  }
}

export default Imag