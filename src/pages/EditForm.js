import React from 'react'
import sportsList from "../pages/_mock/sports.json"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const EditForm = () => {
    return (
        <Container>
            <Form className="d-flex flex-column form">
                <Row>
                    <Col>
                        <Form.Group controlId="form.Name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="form.Date">
                            <Form.Label>Date of Birth
                            </Form.Label>
                            <Form.Control type="date" name="dob" />
                        </Form.Group>
                    </Col>

                </Row>


                <Row>
                    <Col>
                        <Form.Group controlId="form.Select">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Default select example" name="gender" >
                                <option value="" disabled>Select the Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="form.Select">
                            <Form.Label>Sports</Form.Label>
                            <DropdownMultiselect
                                options={sportsList.map((value) => { return (value) })}
                                name="sports"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="form.Team">
                            <Form.Label>Team</Form.Label>
                            <Form.Control type="text" placeholder="Enter team" name="team" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="form.Location">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter location" name="location" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="form.Interests">
                            <Form.Label>Interests</Form.Label>
                            <Form.Control type="text" placeholder="Enter Interest" name="interests" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="form.Image">
                            <Form.Label>Image
                            </Form.Label>
                            <Form.Control type="file" name="image" />
                        </Form.Group>
                    </Col>
                </Row>



                <Row>
                    <Form.Group controlId="form.Description">
                        <Form.Label>Description
                        </Form.Label>
                        <Form.Control as="textarea" row={3} name="description" />
                    </Form.Group>
                </Row>

                <Button type="submit" className="">Update</Button>
            </Form>
        </Container>
    )
}

export default EditForm