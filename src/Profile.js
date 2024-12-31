import React, { useState } from "react";
function Profile()
{
    const[Loggedin,setLoggedin]=useState(111111111111111111);
    return(
        <div>
           {
            Loggedin==1?
            <h1>Welcome Shams</h1>
            :
            Loggedin==2?
            <h2>Welcome Mudassir</h2>
            :
            <h3>Welcome Zakir</h3>
           }
        </div>
    );
}
export default Profile;