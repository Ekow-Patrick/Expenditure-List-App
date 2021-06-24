
import React,{useState} from 'react';
import { Card, Button,Modal } from 'react-bootstrap';
import EditExpense from './EditExpense';


const Expense = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        console.log('item deleted')
        props.deleteExpense(props.expenseInfo.id)
    }
    return (
        <>
            

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Category :{props.expenseInfo.category}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditExpense expenseInfo={props.expenseInfo} editExpense={props.editExpense} closeModal={handleClose} />
                </Modal.Body>
               
            </Modal>
            
            <Card border="success" md='2' style={{ width: '25rem', marginBottom: '1rem', marginRight: '1rem' }}>
                <Card.Header as="h4" >Category :{props.expenseInfo.category} </Card.Header>
                <Card.Body>
                    <Card.Title>Date and Time of Event</Card.Title>
                    <Card.Text>
                        <p>{props.expenseInfo.date}</p>
                    </Card.Text><hr />

                    <Card.Title>Item Purchased</Card.Title>
                    <Card.Text>
                        <p>{props.expenseInfo.item}</p>
                    </Card.Text><hr />
                    <Card.Title>Amount Paid GH¢</Card.Title>
                    <Card.Text>
                        <p>{props.expenseInfo.amount}</p>
                    </Card.Text><hr />
                    <Card.Link href="#"><Button variant="outline-primary" onClick={handleShow} >Update Expense</Button></Card.Link>
                    <Card.Link href="#"><Button variant="outline-danger" onClick={handleDelete} >Delete Expense</Button></Card.Link>
                </Card.Body>
            </Card>
        </>

    );
}

export default Expense;
