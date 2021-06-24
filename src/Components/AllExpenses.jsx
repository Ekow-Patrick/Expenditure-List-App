
import React from 'react';
import Expense from './Expense';
import { Container, Row } from 'react-bootstrap';

const AllExpenses = (props) => {

    return (
        <Container>
            <Row>
                {
                    props.expenseData.map((expense) => {
                        return <Expense expenseInfo={expense} key={expense.id} deleteExpense={props.deleteExpense} editExpense={props.editExpense} />
                    })
                }
            </Row>
        </Container>

    );
}

export default AllExpenses;
