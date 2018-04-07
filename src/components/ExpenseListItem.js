import React from 'react';
import { Link } from 'react-router-dom';

const ElementListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`} >
            <h2>{props.expense.description}</h2>
        </Link>
        <h2>{props.expense.amount} - {props.expense.createdAt}</h2>
        <hr />
    </div>
);

export default ElementListItem;
