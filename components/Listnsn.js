import { useAithsh } from "./AithshState";

 function Listnsn({details}) {

    const {aithsh, addAithsh} = useAithsh();
    const handleChange = event => {
     event.preventDefault();
     addAithsh(event.target.name,event.target.value);
    }
    
    console.log(aithsh);
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
                    <th>ΟΝΟΜΑΣΙΑ</th>
                    <th>ΜΕΓΙΣΤΗ ΠΟΣΟΤΗΤΑ</th>
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
                        <th><input type='number' name={item.AID} defaultValue={aithsh.find(({aid})=>aid===item.AID)?Object.values(aithsh.find(({aid})=>aid===item.AID))[1]:'0'} onChange={handleChange} min='0' max={`${item.Quantity}`}/></th>
                    </tr>)}
                </tbody>
                </table>
            </form>

        </div>
    );
}

export default Listnsn;