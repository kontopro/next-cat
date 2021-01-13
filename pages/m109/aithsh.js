import { useAithsh } from "../../components/AithshState";
import Submenu from '../../components/Submenu'
import Barcode from 'react-barcode'

export default function Aithsh() {

  const {aithsh, handleAithsh} = useAithsh();

  return (
    <>
      <Submenu />
      <main className='aithsh'>
        <div className='print'>
          <div className='print-title'>
            <h1>Αίτηση Μηχανογραφικώς Χορηγουμένων Υλικών</h1>
          </div> 
          <table className='t1'>
            <tbody>
            <tr><td>ΑΙΤΟΥΣΑ ΜΟΝΑΔΑ</td><td>ΜΟΝΑΔΑ ΜΕΣΩ</td><td>ΔΓΗ ΧΟΡΗΓΗΣΗΣ</td><td>ΔΓΗ ΔΕΣΜΕΥΣΗΣ</td></tr>  
            <tr><td></td><td>Η'</td><td></td><td></td></tr>  
            <tr><td>ΧΟΡΗΓΟΥΣΑ ΜΟΝΑΔΑ</td><td>ΜΟΝΑΔΑ ΔΙΑ</td><td>ΚΩΔΙΚΑΣ ΔΓΗΣ</td><td>ΚΩΔΙΚΑΣ ΔΓΗΣ</td></tr>  
            <tr><td></td><td></td><td></td><td></td></tr>  
            </tbody>
          </table>       
          <table className='t2'>
          <thead>
            <tr>
              <th>ΚΩΔΙΚΑΣ ΕΝΤΥΠ.</th>
              <th>ΑΡΙΘΜΟΣ ΟΝΟΜΑΣΤΙΚΟΥ</th>
              <th>PART NUMBER</th>
              <th>ΟΝΟΜΑΣΙΑ</th>
              <th>ΚΥΡΙΟ ΥΛΙΚΟ</th>
              <th>ΑΙΤΟΥΜΕΝΗ ΠΟΣΟΤΗΤΑ</th>
              <th>ΤΑΥΤΟΤΗΤΑ ΕΝΤΥΠΟΥ</th>
              <th>ΜΜ</th>
              <th>ΑΙΤΙΟΛΟΓΙΑ</th>
              <th>ΠΡΟΤΕΡΑΙΟΤΗΤΑ</th>
              <th>ΔΕΛΤΙΟ</th>
              <th>ΠΑΡΑΤΗΡΗΣΕΙΣ</th>
            </tr>
          </thead>
          {aithsh.length===0?<tbody>
            <tr><td colSpan='12'>Δεν έχουν καταχωρηθεί υλικά στην αίτηση</td></tr>
            
          </tbody>:
          <tbody>    
          {aithsh.map(x=>
            <tr key={x.ao}>
              <td> </td>
              <td>{x.ao}</td>
              <td> </td>
              <td>{x.per}</td>
              <td> </td>
              <td>{x.pos}</td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td><Barcode width={1} height={30} displayValue={false} value={`${x.ao} ${x.pos}`} /> </td>
            </tr>
          )}
          </tbody>} 
          <tfoot>
            <tr>
            <td colSpan='3' rowSpan='3'>ΥΠΟΓΡΑΦΗ ΑΙΤΟΥΝΤΟΣ ΚΑΙ ΣΦΡΑΓΙΔΑ ΜΟΝΑΔΑΣ</td>
            <td colSpan='3' rowSpan='3'>ΕΓΚΡΙΝΟΝΤΟΣ ΤΗΝ ΑΙΤΗΣΗ ΚΑΙ ΟΙΚΕΙΑ ΣΦΡΑΓΙΔΑ</td>
            <td colSpan='3' rowSpan='3'>ΥΠΟΓΡΑΦΗ ΚΩΔΙΚΟΠΟΙΗΣΗΣ ΥΠΑΛΛΗΛΟΥ</td>
            <td colSpan='3' rowSpan='3'>Υποβάλλεται υπό τύπου αναφοράς με τη Φ.600.14/.................................................................</td>
            </tr>
          </tfoot>
          </table>
        </div>
      </main>
    </>
  )
}
