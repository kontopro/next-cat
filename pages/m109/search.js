import { useState } from 'react'
import Link from 'next/link';
import Submenu from '../../components/Submenu'
import details from '../../data/detail-m109.json'
import {useRouter} from 'next/router';

export default function Search() {

  // Βρίσκω το μήκος του Κυρίου Υλικού
  const lr = useRouter().asPath.lastIndexOf('/search/')-1

  // Βρίσκω το ΚΥ, πχ m109, ms290, κλπ
  const ky = useRouter().asPath.substr(1,lr)

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
          {search.length>3?
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
                  <td><Link href={`/${ky}/sub/${x.PictureNo}`}><a>{x.PictureNo} &#8618;</a></Link></td>
                  </tr>)}
                </tbody>
                </table>
:''}
        </div>
      </main>
    </>
  )
}
