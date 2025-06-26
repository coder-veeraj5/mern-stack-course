
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
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your last name"
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Age</Form.Label>
              <Form.Control placeholder="Enter your age" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
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
                <th> Name</th>
                <th>age</th>
                <th>email</th>
                <th>course</th>
              </tr>
            </thead>
            <tbody>
               {info.map((student, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
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
