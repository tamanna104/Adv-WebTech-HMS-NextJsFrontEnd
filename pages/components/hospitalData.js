
export default function HospitalData({data})   
{
    return(
        <>
        <dev style={{position:"absolute", left:"40%"}}>
        <h4>Name: {data.name}</h4>
            <h4>Address: {data.address}</h4>
            <h4>HelpLine: {data.helpline}</h4>
            <h4>Email: {data.email}</h4>
            <h4>Ambulance Avaiable: {data.ambulanceNumber}</h4>
        </dev>
      
        </>
    )
}
