function Teacher(Props)
{
    console.log(Props)
    return(
        <div style={{backgroundColor:"aqua",marginLeft:70, height:85,width:220}}>
            <ol>
            <li>{Props.name}</li>
            {/* <li>{Props.email}</li>
            <li>{Props.others.address}</li>
            <li>{Props.others.mobile_No}</li> */}
            </ol>
        </div>
    );
}
export default Teacher