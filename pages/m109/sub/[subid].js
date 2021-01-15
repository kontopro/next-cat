import Link from 'next/link';
import Submenu from '../../../components/Submenu'
import Listnsn from '../../../components/Listnsn'
import {kyrio} from '../kyrio.js'
import masters from '../data/master.json'
import details from '../../../data/detail-m109.json'
import {useRouter} from 'next/router';

function Sub({ nsns, imag }) {

  const {basePath}  = useRouter();

  return (
    <>
    <Submenu kyrio={kyrio} />
    <main className='imgid'>
      <p>{imag.name}</p>
      <p>
      <img src={`${basePath}/images-${kyrio}/${nsns[0].PictureNo}.jpg`} alt="assemblie" width="500" height='auto' />
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