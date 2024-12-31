import React,{useState} from "react"
function Login()
{
    const [Id,setId]=useState("")
    const [Password,setPassword]=useState("")
    const [Err,setErr]=useState(false)
    const [PassErr,setPassErr]=useState(false)
    function HandleLogin(e)
    {
        if(Id.length<3 || Password.length<3)
        {
            alert("Type Correct Values")
        }
        else
        {
            alert("All Good :)")
        }
        // alert("Hello")
        e.preventDefault()
    }
    function IdHandler(e)
    {
        let items = e.target.value;
        if(items.length<4)
        {
            setErr(true)
            // console.warn("Invalid")
        }
        else
        {
            setErr(false)
        }
        setId(items)
        console.warn(e.target.value.length)
    }
    function PasswordHandler(e)
    {
        let items = e.target.value;
        if(items.length<4)
        {
            setPassErr(true)
            // console.warn("Invalid")
        }
        else
        {
            setPassErr(false)
        }
        setPassword(items)
        console.warn(e.target.value.length)
    }
    return(
<div>
    <h1>Login Component</h1>
    <form onSubmit={HandleLogin}>
        <input type="text"placeholder="Enter Your Id" onChange={IdHandler}/>{Err?<span>User Not Valid</span>:""}
        <br/>
        <input type="password" placeholder="Enter Your Password"onChange={PasswordHandler}/>{PassErr?<span>Password Not Valid</span>:""}
        <br/>
        <br/>
        <button>Login</button>
    </form>
</div>
    );
}
export default Login