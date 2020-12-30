

 function Listnsn({details}) {

    return (
        <div className='listnsn'>            
            <p>hello Listnsn</p>
            <p>Σύνολο Α/Ο: {details.length}</p>
            {details.map(item => <div key='item.NameID' className='nsn'> {item.RefNo} | {item.NameID}</div>)}

        </div>
    );
}

export default Listnsn;