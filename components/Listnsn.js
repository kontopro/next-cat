import { useAithsh } from "./AithshState";

function Listnsn({details}) {

    const {aithsh, handleAithsh} = useAithsh();
    
    const handleChange = event => {        
     event.preventDefault();
     event.target.getAttribute('ao') === 'Ανευ Α/Ο'?handleAithsh(event.target.getAttribute('pn'),event.target.value,event.target.getAttribute('name')):handleAithsh(event.target.getAttribute('ao'),event.target.value,event.target.getAttribute('name'));
    }

    return (
        <div className='listnsn'>            
            <p>Σύνολο Α/Ο: {details.length}</p>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Α/Α</th>
                            <th>Α/Ο</th>
                            <th>P/N</th>
                            <th>ΠΕΡΙΓΡΑΦΗ</th>
                            <th>ΠΛΗΘΟΣ</th>
                            <th>ΑΙΤΟΥΜΕΝΗ ΠΟΣΟΤΗΤΑ</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {details.map(item => 
                        <tr key={item.AID} className='nsn'> 
                            <td>{item.RefNo}</td> 
                            <td>{item.NameID}</td>
                            <td>{item.PN}</td>
                            <td>{item.Name}</td>
                            <td>{item.Quantity}</td>
                            <td><input type='number' name={item.Name} pn={item.PN} id={item.AID} ao={item.NameID} defaultValue={aithsh.find(({ao})=>ao===item.NameID)?Object.values(aithsh.find(({ao})=>ao===item.NameID))[1]:'0'} onChange={handleChange} min='0' max={`${item.Quantity}`}/></td>
                        </tr>)}
                    </tbody>
                </table>
            </form>

        </div>
    );
}

export default Listnsn;