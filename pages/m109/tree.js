import Link from 'next/link';
import Submenu from '../../components/Submenu'
import assemblies from '../../data/master-m109.json'
import details from '../../data/detail-m109.json'
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
           {assemblies.map(item =>
                <div  className='tree-master' key={item.id} >
                  <a>{item.caption}</a>
                  {/* toDo */}
                  {/* για κάθε κύριο συγκρότημα από κάτω τα υπο-συγκροτήματα */}

              </div>
            )}
        </div>
      </main>
    </>
  )
}


export default Assemblies