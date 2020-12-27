
const Assembly = (posts) => {

  // const assemblies = master;
  // const router = useRouter()
  // const { assid } = router.query
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
      {/* <p>Συγκρότημα: {assembly.caption}</p>
      <p>Πλήθος: {assembly.menuItem.length?assembly.menuItem.length:`1`}</p>
      <div className='cards-wrapper'>
      {listItems}
      </div> */}
      <ul>
      {posts.map((post) => (
        <li>{post.caption}</li>
      ))}
    </ul>
    </main>
  )

export const getStaticPaths = async () => {


  return {
    paths:[],
    fallback:false
  }
}}

export const getStaticProps = async () => {
  
  const res = await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/master.json')
  const posts = await res.json()

  return {
    props:{
      posts
    }
  }
}


export default Assembly