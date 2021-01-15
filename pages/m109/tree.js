import Submenu from '../../components/Submenu'
import {kyrio} from './kyrio.js'
import assemblies from './data/master.json'
import details from './data/detail.json'
import {useRouter} from 'next/router';
import {useState} from 'react'
import Listnsn from '../../components/Listnsn';

function Assemblies() {

  const {basePath}  = useRouter();
  const [pic, setPic] = useState([])

  // const nsns = details.filter(item => item.PictureNo === params.subid)

  return (
    <>
      <Submenu kyrio={kyrio} />
      <main className='tree'>
        <div className='page-title'>
          <img  src={`${basePath}/tree2.png`} width='35' height='35'/>
          <h1>Δενδρική Μορφή</h1>
        </div>
        <div className='tree-wrapper'>
          <div className='tree-left-wrapper'>
            {assemblies.map(master =>
                  <div  className='tree-master' key={master.id} >
                    <button>{master.caption}</button>
                    {/* toDo */}
                    {/* για κάθε κύριο συγκρότημα από κάτω τα υπο-συγκροτήματα */}
                    {master.menuItem.length?
                      master.menuItem.map(detail=>
                        <div className='tree-detail' key={detail.id}>
                          <button>{detail.caption}</button>
                        </div>):
                        <div className='tree-detail' key={master.menuItem.id}>
                          <button>{master.menuItem.caption}</button>
                        </div>}
                  </div>
              )}
          </div>
          <div className='tree-right-wrapper'>
                        <div className='tree-img'></div>
                        <Listnsn details={pic} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Assemblies