
const Assembly = ({post}) => {
  
  // const assembly = assemblies.find(({id}) => id === assid)
  // const listItems = assembly.menuItem.length?assembly.menuItem.map(item =>
  //   <div key={item.id} className='card'>
  //     <Link href={`/assemblies/${assid}/${item.id}`}>
  //       <a>{item.caption}</a>
  //     </Link>
  //   </div>
  //   ):``;

  return (
    <main>
      <p>{post.caption}</p>
      {/* <p>Συγκρότημα: {assembly.caption}</p>
      <p>Πλήθος: {assembly.menuItem.length?assembly.menuItem.length:`1`}</p>
      <div className='cards-wrapper'>
      {listItems}
      </div> */}
      
    </main>
  )
    }

export const getStaticPaths = async () => {

  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { assid: post.id },
  }))

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps = async ({params}) => {
  
  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const posts = await res.json()
  const post = posts.find(({id}) => id === params.assid)

  return {
    props:{
      post
    }
  }
}


export default Assembly