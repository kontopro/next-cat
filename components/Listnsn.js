import { useAithsh } from "./AithshState";

function Listnsn({details}) {

    const {aithsh, handleAithsh} = useAithsh();
    
    const handleChange = event => {        
     event.preventDefault();
     event.target.getAttribute('ao') === 'Ανευ Α/Ο'?handleAithsh(event.target.getAttribute('pn'),event.target.value,event.target.getAttribute('name')):handleAithsh(event.target.getAttribute('ao'),event.target.value,event.target.getAttribute('name'));
    }

    console.log(aithsh)

    return (
        <div className='listnsn'>            
            <p>hello Listnsn {}</p>
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
                        <th>{item.RefNo}</th> 
                        <th>{item.NameID}</th>
                        <th>{item.PN}</th>
                        <th>{item.Name}</th>
                        <th>{item.Quantity}</th>
                        <th><input type='number' name={item.Name} pn={item.PN} id={item.AID} ao={item.NameID} defaultValue={aithsh.find(({ao})=>ao===item.NameID)?Object.values(aithsh.find(({ao})=>ao===item.NameID))[1]:'0'} onChange={handleChange} min='0' max={`${item.Quantity}`}/></th>
                    </tr>)}
                </tbody>
                </table>
            </form>

        </div>
    );
}

export default Listnsn;