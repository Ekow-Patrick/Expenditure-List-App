

import React, { Component } from 'react';
import { Form, Button, InputGroup, FormControl, } from 'react-bootstrap';

class EditExpense extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: props.expenseInfo.date,
            category: props.expenseInfo.category,
            item: props.expenseInfo.item,
            amount: props.expenseInfo.amount,
            id:props.expenseInfo.id
        }
    };
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editExpense(this.state.id, this.state);
        this.setState({
            date: "",
            category: "",
            item: "",
            amount: ""
        })
        console.log(this.state)
        this.props.closeModal();
    }
    render() {
        return (
            <div style={{ marginLeft: '2rem' }}>
                <Form onSubmit={this.handleSubmit} >
                    <Form.Label as="h5" >Date & Time</Form.Label>
                    <Form.Control type="datetime-local" name="date" value={this.state.date} onChange={this.handleChange} required />
                    <br />
                    <Form.Label as="h5">Category of Expenditure</Form.Label> 
                    <select name="category" value={this.state.category} onChange={this.handleChange} required  >
                        <option value=""> Select Category</option>
                        <option value="Food and Drink"> Food and Drink </option>
                        <option value="Transportation"> Transportaion </option>
                        <option value="Housing and Rent"> Housing and Rent </option>
                        <option value="Miscellaneous"> Miscellaneous </option>
                    </select>
                    <br /><br/>
                    <Form.Label as="h5" >Item Purchased</Form.Label>
                    <Form.Control type="text" name="item" value={this.state.item} onChange={this.handleChange} required /><br />
                    <Form.Label as="h5">Total Amount Paid GH¢</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>¢</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Amount (to the nearest dollar)" type="number" name="amount" value={this.state.amount} onChange={this.handleChange} required/>
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>


                    <Button variant="success" type="submit">
                        Update
                    </Button>
                </Form>
            </div >
        );
    }
}

export default EditExpense;

