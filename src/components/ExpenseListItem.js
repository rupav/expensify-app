import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ElementListItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`} >
            <h2>{props.expense.description}</h2>
        </Link>
        <p>
            {numeral(props.expense.amount / 100).format('$0,0.00')}
            -
            {moment(props.expense.createdAt).format('MMM Do YYYY')}
        </p>
    </div>
);

export default ElementListItem;
