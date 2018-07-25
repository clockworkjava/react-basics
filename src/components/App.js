import React from 'react';
import AdminPanel from './AdminPanel';
import Order from './Order';
import Header from './Header';
import Inventory from './Inventory';

import '../index.css';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            books : []
        }
    }

    addNewBook = (book) => {

        let newBooks = [...this.state.books];

        newBooks.push(book);

        this.setState({
            books : newBooks
        });

    }

    render() {
        return (
            <div className="app container">
                <Header />
                <div className="row">
                    <Order />
                    <Inventory books={this.state.books}/>
                    <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
                </div>
            </div>
        )
    }

}


export default App;