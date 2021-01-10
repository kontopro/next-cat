import { useAithsh } from "../../components/AithshState";
import Submenu from '../../components/Submenu'

export default function Aithsh() {

  const {aithsh, handleAithsh} = useAithsh();
  console.log(aithsh)

  return (
    <>
      <Submenu />
      <main className='aithsh'>
        <div className='print'>
          <div className='print-title'>
            <h1>Αίτηση Μηχανογραφικώς Χορηγουμένων Υλικών</h1>
          </div>        
        <table>
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
              <td> </td>
            </tr>
          )}
          </tbody>} 
          <tfoot>
            <tr>
            <td colSpan='3' rowSpan='3'>ΥΠΟΓΡΑΦΗ ΑΙΤΟΥΝΤΟΣ ΚΑΙ ΣΦΡΑΓΙΔΑ ΜΟΝΑΔΑΣ</td>
            <td colspan='3' rowSpan='3'>ΕΓΚΡΙΝΟΝΤΟΣ ΤΗΝ ΑΙΤΗΣΗ ΚΑΙ ΟΙΚΕΙΑ ΣΦΡΑΓΙΔΑ</td>
            <td colspan='3' rowSpan='3'>ΥΠΟΓΡΑΦΗ ΚΩΔΙΚΟΠΟΙΗΣΗΣ ΥΠΑΛΛΗΛΟΥ</td>
            <td colspan='3' rowSpan='3'>Υποβάλλεται υπό τύπου αναφοράς με τη Φ.600.14/.................................................................</td>
            </tr>
          </tfoot>
          </table>
        </div>
      </main>
    </>
  )
}
