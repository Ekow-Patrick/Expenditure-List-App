import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AddExpenseForm from './Components/AddExpenseForm';
import AllExpenses from './Components/AllExpenses';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      expenses:[
        {
          date: "23/06/2021 T 11:38 PM",
          category: "Miscellaneous",
          item: "Pair of Trouser",
          amount: "150",
          id: "abc124"
        },
       
      ]
    }
  };
  AddNewExpense =(expense) =>{
    expense.id=Math.random().toString()
    this.setState({
      expenses:[...this.state.expenses, expense]
    })
  }
  deleteExpense =(id) =>{
    let undeletedExpenses = this.state.expenses.filter((expense) => expense.id !==id)
      this.setState({
        expenses:undeletedExpenses
      })
  }
  editExpense =(id, updatedExpense) =>{
    this.setState({
      expenses:this.state.expenses.map(expense =>expense.id===id? updatedExpense : expense)
    })
  }
  render() {
    return (
      <>
      <Container fluid style={{marginTop:'3rem'}}>
        <Row>
          
          <Col md="3">
            <h3>Add New Expenditure</h3><hr/>
           <AddExpenseForm newExpense={this.AddNewExpense} />
          </Col> 

          <Col>
          <h3>Expenditure List</h3><hr/>
          <AllExpenses expenseData={this.state.expenses} deleteExpense={this.deleteExpense} editExpense={this.editExpense}/>
          </Col>
        </Row>
      </Container>
        
      </>
    );
  }
}

export default App;
