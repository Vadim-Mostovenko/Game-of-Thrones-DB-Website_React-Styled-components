import React, { Component } from 'react';
import gotService from '../services/gotService';
import ItemDetails, { Field } from '../itemDetails/itemDetails';

export default class BooksItem extends Component {
    gotService = new gotService();

    render() {
        return (
            <ItemDetails 
                itemId={this.props.bookId}
                getData={this.gotService.getBook}
                selectTitle={'Please select a book'}
            >
                <Field field='name' label='Name'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
            </ItemDetails>
        )
    }
}