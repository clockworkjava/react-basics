import React from 'react';

export default class BookView extends React.Component {


    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
                <img src={this.props.book.image} width="75" height="100" alt={this.props.book.name}/> 
            </div>
                
        );
    }

}