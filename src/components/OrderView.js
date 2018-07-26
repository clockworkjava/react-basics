import React from 'react';

export default class OrderView extends React.Component {

 

    render() {
        return (
            <div>
                {this.props.book.name}
                <button className="btn btn-danger" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>Remove</button>
            </div>
                
        );
    }

}