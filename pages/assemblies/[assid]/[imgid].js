import Link from 'next/link';

function Imag({ imag }) {

  

  return (
    <main>

      <p>{imag.name}</p>
      

    </main>
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
  
  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const assemblies = await res.json()
  const assembly = assemblies.find(({id}) => id === params.assid)
  const imag = assembly.menuItem.length?assembly.menuItem.map((part) => part.id === params.imgid):assembly.menuItem

  return {
    props:{
      imag
    }
  }
}

export default Imag