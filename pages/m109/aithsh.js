import { useAithsh } from "../../components/AithshState";
import Submenu from '../../components/Submenu'

export default function Aithsh() {

  const {aithsh, handleAithsh} = useAithsh();
  console.log(aithsh)

  return (
    <>
      <Submenu />
    <main className='home'>
      <p>aithsh</p>
      {aithsh.map(x=><div key={x.ao}>{x.ao}</div>)}
    </main>
    </>
  )
}
