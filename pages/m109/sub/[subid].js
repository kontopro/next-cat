import Link from 'next/link';
import Submenu from '../../../components/Submenu'
import Listnsn from '../../../components/Listnsn'
import masters from '../../../data/master-m109.json'
import details from '../../../data/detail-m109.json'
import {useRouter} from 'next/router';

function Sub({ nsns, imag }) {

  // Βρίσκω το μήκος του Κυρίου Υλικού
  const lr = useRouter().asPath.lastIndexOf('/sub/')-1

  // Βρίσκω το ΚΥ, πχ m109, ms290, κλπ
  const ky = useRouter().asPath.substr(1,lr)

  const {basePath}  = useRouter();
  const ky = useRouter();
  console.log(ky)

  return (
    <>
    <Submenu />
    <main className='imgid'>
      <p>{imag.name}</p>
      <p>
      <img src={`${basePath}/images-${ky}/${nsns[0].PictureNo}.jpg`} alt="assemblie" width="500" height='auto' />
      </p>
      <Listnsn details={nsns} />
    </main>
    </>
  );
}

export const getStaticPaths = async () => {

  const paths = details.map((item) => ({
    params: { subid: item.PictureNo }
  }))

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params}) => {
  
    const nsns = details.filter(item => item.PictureNo === params.subid)
    const assembly = masters.find(item => item.menuItem.length?item.menuItem.find(x=>x.id === params.subid):item.menuItem.id === params.subid)
    const imag = assembly.menuItem.length?assembly.menuItem.find(item => item.id === params.subid):assembly.menuItem
  
    return {
    props:{
      nsns, imag
    }
  }
}

export default Sub