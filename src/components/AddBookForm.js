import React from 'react';

class AddBookForm extends React.Component {

    constructor() {
        super();
        this.state = { 
            book : {}
        }
    }

    handleChange = (event) => {

        let newBook;

        if(event.target.name==="onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }

        this.setState({
            book: newBook
        });
    }

    addNewBook = (event) => {

        event.preventDefault();

        if(!this.props.editMode) {

            const newBook = { ...this.state.book };

            this.props.addNewBook(newBook);

            this.setState({book : {}});

        } else {
            
            const newBook = {
                ...this.props.book,
                ...this.state.book
            }

            this.props.editBook(this.props.book.name, newBook);

            this.setState({book : {}});
        }

        event.target.reset();

    }

    render() {

        const label = this.props.editMode?"Edit":"Add";

        return (
            <div className="adminPanel col-xs-4">
                <form onSubmit={this.addNewBook}>
                    <div className="form-group">
                        <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                            onChange={this.handleChange} value={this.state.book.name || this.props.book.name} />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
                            onChange={this.handleChange} value={this.state.book.author || this.props.book.author} />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Book description" id="description" name="description" className="form-control"
                            onChange={this.handleChange} value={this.state.book.description || this.props.book.description} />
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                            onChange={this.handleChange} value={this.state.book.onStock || this.props.book.onStock } />
                        <label htmlFor="onStock" className="form-check-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                            onChange={this.handleChange} value={this.state.book.image || this.props.book.image} />
                    </div>
                    <button type="submit" className="btn btn-primary">{label}</button>
                </form>
            </div>
        )
    }

}


export default AddBookForm;