import React from 'react';

export default class BookView extends React.Component {


    render() {
        return (
            <div className="bookView row">
                <div className="col-xs-4">
                    <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name} />
                </div>
                <div className="col-xs-4">
                    <b>{this.props.book.name}</b><br />
                    <i>{this.props.book.author}</i><br />
                </div>
                <div className="col-xs-4">
                    <button className="btn btn-primary" onClick={(event) => this.props.addToOrder(this.props.book)}>Add to Order</button>
                </div>
            </div>

        );
    }

}