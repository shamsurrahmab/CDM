function Student(Props) {
    console.log(Props.name)
    return (
      <div style={{backgroundColor:"yellow",marginLeft:400, width:502}}>
        <h1>Hello!{Props.name}</h1>
        <h1>Email: {Props.email}</h1>
        <h3>Address:{Props.others.address}</h3>
        <h4>Mobile:{Props.others.mobile}</h4>
      </div>
    );
  }
  export default Student;
  