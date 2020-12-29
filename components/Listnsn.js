
async  () => {

    const res =  await fetch('https://raw.githubusercontent.com/kontopro/next-cat/main/data/detail.json')
    const ao =  await res.json()

    return ao
}

 function Listnsn({details}) {

    
    //  const nsn = res.find(item => item.AID === 1)
    // .map(item => <p key={item.AID}>{item.NameID}</p>)

    return (
        <div className='listnsn'>            
            <p>hello Listnsn</p>
            <p>{details.id}</p>
            {/* <p>{nsn[1].AID}</p> */}
        </div>
    );
}

export default Listnsn;