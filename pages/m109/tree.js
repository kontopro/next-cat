import Link from 'next/link';
import Submenu from '../../components/Submenu'
import assemblies from '../../data/master-m109.json'
import details from '../../data/detail-m109.json'
import {useRouter} from 'next/router';

function Assemblies() {

  const {basePath}  = useRouter();
  const r = useRouter();
  console.log(r)


  // Βρίσκω το μήκος του Κυρίου Υλικού
  const lr = useRouter().asPath.lastIndexOf('/tree/')-1

  // Βρίσκω το ΚΥ, πχ m109, ms290, κλπ
  const ky = useRouter().asPath.substr(1,lr)

  return (
    <>
      <Submenu />
      <main className='assemblies'>
        <div className='page-title'>
          <img  src={`${basePath}/icon-gears.jpg`} width='35' height='35'/>
          <h1>Κύρια Συγκροτήματα</h1>
        </div>
        <div className='tree-left-wrapper'>
           {assemblies.map(master =>
                <div  className='tree-master' key={master.id} >
                  <a>{master.caption}</a>
                  {/* toDo */}
                  {/* για κάθε κύριο συγκρότημα από κάτω τα υπο-συγκροτήματα */}
                  {master.menuItem.length?
                    master.menuItem.map(detail=>
                      <div className='tree-detail' key={detail.id}>
                        <p>{detail.caption}</p>
                      </div>):
                      <div className='tree-detail' key={master.menuItem.id}>
                        <p>{master.menuItem.caption}</p>
                      </div>}
                </div>
            )}
        </div>
      </main>
    </>
  )
}


export default Assemblies