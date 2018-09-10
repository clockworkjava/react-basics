import React from 'react';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';
import AdminBookListing from './AdminBookListing'
import {fbase} from '../fbase';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn : false,
            editMode : false,
            bookToEdit : {} 
        };
    };

    changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 

    addNewBook = (book) => this.setState({
        books : [...this.state.books, book],
        editMode : false,
        bookToEdit : {}
    })

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books',{
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
       fbase.removeBinding(this.ref);
    }

    removeFromInventory = (title) => {
        this.setState({
            books : this.state.books.filter( book => title!==book.name )
        })
    }

    sendBookToEdit = (bookToEdit) => {
        this.setState({
            editMode: true,
            bookToEdit: bookToEdit
        });
    }

    editBook = (oldBookTitle,bookAfterEdit) => {
        
        const newBooks = this.state.books.filter( book => oldBookTitle!==book.name );

        this.setState({
            books : [...newBooks, bookAfterEdit],
            editMode : false,
            bookToEdit : {}
        })
    }
    render() {

        return (
            <div>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn}/>
                }
                {this.state.loggedIn && 
                    <React.Fragment>
                        <AddBookForm 
                            addNewBook = {this.addNewBook}    
                            editMode = {this.state.editMode}
                            book = {this.state.bookToEdit}
                            editBook = {this.editBook}
                        />
                        <AdminBookListing 
                            books = {this.state.books}
                            removeFromInventory = {this.removeFromInventory}
                            sendBookToEdit = {this.sendBookToEdit}
                        />
                    </React.Fragment>
                }
            </div>
        )}
}

export default AdminPanel;