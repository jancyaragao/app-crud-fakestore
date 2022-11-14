import { useRef, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';

import { FaUserEdit } from 'react-icons/fa';

function Edit({ id, email, username, password, firstname, lastname, phone, onItemEdit }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const itemEmailRef = useRef(null);
    const itemUsernameRef = useRef(null);
    const itemPasswordRef = useRef(null);
    const itemFisrtNameRef = useRef(null);
    const itemLastNameRef = useRef(null);
    const itemPhoneRef = useRef(null);

    return (
        <>
            <Button id={`Edit${id}`} variant="light" onClick={handleShow}>
                <FaUserEdit />
            </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>

                <Modal.Body><Form>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" ref={itemEmailRef} defaultValue={email} />
                    </Form.Group>

                    <Row>
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" ref={itemUsernameRef} defaultValue={username} />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3 md-6" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={itemPasswordRef} defaultValue={password} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3 md-6" controlId="firstname">
                                <Form.Label>Fisrt name</Form.Label>
                                <Form.Control type="text" placeholder="First name" ref={itemFisrtNameRef} defaultValue={firstname} />
                            </Form.Group>
                        </Col>
                        <Col xs={6} md={6}>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" placeholder="Last name" ref={itemLastNameRef} defaultValue={lastname} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3 md-6" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" placeholder="Phone" ref={itemPhoneRef} defaultValue={phone} />
                    </Form.Group>

                </Form></Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit" onClick={() => {
                        onItemEdit({
                            email: itemEmailRef.current,
                            username: itemUsernameRef.current,
                            password: itemPasswordRef.current,
                            firstName: itemFisrtNameRef.current,
                            lastName: itemLastNameRef.current,
                            phone: itemPhoneRef.current
                        });
                        handleClose();
                    }}>
                        Save
                    </Button>
                </Modal.Footer>

            </Modal>
        </>

    );
}

export default Edit;