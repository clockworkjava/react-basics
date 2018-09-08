import React from 'react';

class AdminBookListing extends React.Component {

    render() {

        let list;

        if(this.props.books) {
            list = <ol>{this.props.books.map((book) => <li key={book.name}>{book.name} {book.author}</li>)}</ol>
        } else {
            list = <div>No books in state</div>
        }

        return (
            <div>
                {list}
            </div>
        );
    }

}


export default AdminBookListing;