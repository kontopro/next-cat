import Submenu from '../../components/Submenu'
import {kyrio, kyrioImg} from './kyrio.js'
import assemblies from './data/master.json'
import details from './data/detail.json'
import {useRouter} from 'next/router';
import {useState} from 'react'
import Listnsn from '../../components/Listnsn';

function Tree() {

  const {basePath}  = useRouter();
  const [pic, setPic] = useState([])

  function handleB(event) {
   event.preventDefault();
   const subid = event.target.getAttribute('picture')
   const nsns = details.filter(item => item.PictureNo === subid)
   setPic(nsns)
  } 

  return (
    <>
      <Submenu kyrio={kyrio} />
      <main className='tree'>
        <div className='page-title'>
          <img  src={`${basePath}/tree3.png`} width='35' height='35'/>
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
                          <button onClick={handleB} picture={detail.id}>{detail.caption}</button>
                        </div>):
                        <div className='tree-detail' key={master.menuItem.id}>
                          <button onClick={handleB} picture={master.menuItem.id}>{master.menuItem.caption}</button>
                        </div>}
                  </div>
              )}
          </div>
          <div className='tree-right-wrapper'>
                        <div className='tree-img'>
                          <p>{pic.length?                           
                            <img src={`${basePath}/images-${kyrio}/${pic[0].PictureNo}.jpg`} alt="assemblie" width="400" height='auto' />
                            :<img src={`${basePath}/images-${kyrio}/000.jpg`} alt="assemblie" width="500" height='auto' />}
                          </p>
                          {pic.length?                           
                            <Listnsn details={pic} />:
                            ''}
                        </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Tree