import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
    
    render() {

        const orderedBooks = this.props.order.map( order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder}/>
        })

        return (
            <div className="order col-xs-4">
                {orderedBooks}
            </div>
        );
    }
}

export default Order;