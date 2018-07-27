import React from 'react';

export default class OrderView extends React.Component {

 

    render() {
        return (
            <div className="orderView row">
                <div className="col-xs-8">
                    <span>{this.props.book.name}</span>
                </div>
                <div className="col-xs-4">
                <button className="btn btn-danger" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
                </div>
                
            </div>
                
        );
    }

}