import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AiOutlineUserDelete } from 'react-icons/ai';

function Delete({ id, firstname, lastname }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ConfirmationUser = ({ firstname, lastname }) => {
        return (
            <>
                <Modal.Body className='text-capitalize'>Do you want to delete user {firstname} {lastname}?</Modal.Body>
            </>
        )
    }

    const DeleteUser = async ({ id }) => {
        fetch(`https://fakestoreapi.com/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => console.log(json))

        handleClose();
    }

    return (
        <>
            <Button id={`Delete${id}`} variant="light" onClick={handleShow}>
                <AiOutlineUserDelete />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <ConfirmationUser firstname={firstname} lastname={lastname}></ConfirmationUser>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => {
                        DeleteUser({
                            id: id
                        })
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete;