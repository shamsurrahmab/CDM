import React, { useState } from 'react';

function Render() {
  const [address, setAddress] = useState("The Land Of Hospitality Swabi");

  console.warn("Sir Hammad", address);

  return (
    <div>
      <h2
        style={{fontWeight: 'bold',color: 'blue',background: 'yellow',width: '500px',marginLeft: '450px',}}>
        Hello Asalamoalaikum
      </h2>
      <h3>Address: {address}</h3>
      <button onClick={()=>setAddress("Peshawar")}>Update Address</button>
    </div>
  );
}

export default Render;