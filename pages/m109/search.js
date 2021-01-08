
import { useState } from 'react'
import Link from 'next/link';
import Submenu from '../../components/Submenu'
import details from '../../data/detail-m109.json'

export default function Search() {

  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    event.preventDefault();
    const curr = event.target.value;
    setSearch(curr);
  } 

  console.log(search)
 
  return (
    <>
      <Submenu />
      <main className='search'>
        <p>Πληκτρολογείστε Α/Ο</p>
        <form>
          <input type='text' onChange={handleChange} name='ao'/>
        </form>
        <div>
          {search.length>1?
                <table>
                <thead>
                    <tr>
                        <th>Α/Ο</th>
                        <th>P/N</th>
                        <th>ΠΕΡΙΓΡΑΦΗ</th>
                        <th>ΥΠΟΣΥΓΚΡΟΤΗΜΑ</th>
                    </tr>
                </thead>
                <tbody>
                {details.filter(nsn => nsn.NameID.includes(search)).map(x => <tr key={x.AID}>
                  <td>{x.NameID}</td>
                  <td>{x.PN}</td>                
                  <td>{x.Name}</td>
                  <td><Link href={`/m109/sub/${x.PictureNo}`}><a>{x.PictureNo} &#8618;</a></Link></td>
                  </tr>)}
                </tbody>
                </table>
:''}
        </div>
      </main>
    </>
  )
}
