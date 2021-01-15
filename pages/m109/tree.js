import Link from 'next/link';
import Submenu from '../../components/Submenu'
import {kyrio} from './kyrio.js'
import assemblies from './data/master.json'
import details from './data/detail.json'
import {useRouter} from 'next/router';

function Assemblies() {

  const {basePath}  = useRouter();

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