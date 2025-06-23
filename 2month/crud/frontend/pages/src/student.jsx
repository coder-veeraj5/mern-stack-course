import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";

function Student() {
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
                <Form.Control type="password" placeholder="Enter your last name" />
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
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Age</th>
              <th>City</th>
              <th>State</th>
              <th>zip</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>veeraj </td>
              <td>patil</td>
              <td>sanaswadi</td>
              <td>19</td>
              <td>pune</td>
              <td>maharastra</td>
              <td>412208</td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </div>
  );
}

export default Student;
