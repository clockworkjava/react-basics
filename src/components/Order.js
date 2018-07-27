import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
    
    render() {

        const orderedBooks = this.props.order.map( order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder}/>
        })

        return (
            <div className="order col-xs-6">
                <h2>Your order:</h2>
                {orderedBooks}
            </div>
        );
    }
}

export default Order;