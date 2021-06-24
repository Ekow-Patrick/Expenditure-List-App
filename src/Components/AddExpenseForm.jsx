
import React, { Component } from 'react';
import { Form, Button, InputGroup, FormControl, } from 'react-bootstrap';

class AddExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            category: "",
            item: "",
            amount: ""
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
        this.props.newExpense(this.state);
        this.setState({
            date: "",
            category: "",
            item: "",
            amount: ""
        })
        console.log(this.state)
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

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Add New Expenditure
                        </Button>
                    </div>
                    
                </Form>
            </div >
        );
    }
}

export default AddExpenseForm;
