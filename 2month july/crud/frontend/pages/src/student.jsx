
 import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

function Student() {


const [info ,setinfo]=useState([]);

const getallstudent=async()=>{
try {
    const response= await axios.get("http://localhost:3003/students");
  setinfo(response.data);
 console.log(response.data, "response");
  
} catch (error) {
  console.log(error);
  
  
}
}

useEffect(() => {
getallstudent();
}, [])


  const [ firstName , setFirstName] = useState()
  const [ lastname , setLastname] = useState()
  const [ address, setaddress] = useState()
  const [ roll , setroll] = useState()
 const [ std , setstd] = useState()

const submitstudentdata= async()=>{
  try {
    const payload=
       {
       
        firstname: firstName,
        lastname:lastname ,
        address: address,
        roll: roll,
        std: std
        
    }
     const response = await axios.post("http://localhost:3003/students" , payload);
     getallstudent();
       console.log(response.data , "====>")

  } catch (error) {
    console.log(error);
    
  }
}

const onchangefirstname= (e)=>{
try {
  setFirstName(e.target.value);
} catch (error) {
  console.log(error);
  
}
}

const onchangelastname= (e)=>{
try {
  setLastname(e.target.value);
} catch (error) {
  console.log(error);
  
}
}

const onchangeaddress= (e)=>{
try {
  setaddress(e.target.value);
} catch (error) {
  console.log(error);
  
}
}

const onchangeroll= (e)=>{
try {
  setroll(e.target.value);
} catch (error) {
  console.log(error);
  
}
}


const onchangestd= (e)=>{
try {
  setstd(e.target.value);
} catch (error) {
  console.log(error);
  
}
}



  // const [info, setinfo] = useState([
  //   {
  //     name: "veeraj",
  //     age: "20",
  //     email: "patilviraj510@gmail.com",
  //     course: "it",
  //   },
  //   {
  //     name: "yash",
  //     age: "19",
  //     email: "ykute54@gmail.com",
  //     course: "it",
  //   },
  //    {
  //     name: "sahil",
  //     age: "22",
  //     email: "sahilute54@gmail.com",
  //     course: "it",
  //   },
  // ]);

  return (
    <div className="row gx-4">
      <div className="col-md-6   p-3 ">
        <div className="info-section">
          <h1 className="info-text text-center"> student info</h1>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name"  onChange={onchangefirstname}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                    onChange={ onchangelastname}
/>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" onChange={onchangeaddress}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Roll no.</Form.Label>
              <Form.Control placeholder="Enter your roll no." onChange={onchangeroll}/>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>std</Form.Label>
                <Form.Control onChange={onchangestd}/>
              </Form.Group>

             
            </Row>

            

            <Button variant="primary"  onClick={submitstudentdata}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="col-md-6 p-3">
        <div className="list-info ">
          <h1 className="list-text text-center">student list</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>first Name</th>
                <th>last name</th>
                <th>address</th>
                <th>Rollno.</th>
                <th>std</th>
              </tr>
            </thead>
            <tbody>
               { info && info.map((student, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{student?.firstname}</td>
                  <td>{student?.lastname}</td>
                  <td>{student?.address}</td>
                  <td>{student?.roll}</td>
                  <td>{student?.std}</td>
                </tr>
              ))}  
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Student;