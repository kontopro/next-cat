import { useRouter } from 'next/router'
import Link from 'next/link';
import master from '../../data/master.json'

const Assembly = () => {

  const assemblies = master;
  const router = useRouter()
  const { assid } = router.query
  const assembly = assemblies.find(({id}) => id === assid)
  const listItems = assembly.menuItem.length?assembly.menuItem.map(item =>
    <div key={item.id} className='card'>
      <Link href={`/assemblies/${assid}/${item.id}`}>
        <a>{item.caption}</a>
      </Link>
    </div>
    ):``;

  return (
    <main>
      <p>Συγκρότημα: {assembly.caption}</p>
      <p>Πλήθος: {assembly.menuItem.length?assembly.menuItem.length:`0`}</p>
      <div className='cards-wrapper'>
      {listItems}
      </div>
    </main>
  )
}

export default Assembly