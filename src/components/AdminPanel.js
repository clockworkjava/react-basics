import React from 'react';
import LoginPanel from './LoginPanel';
import AddBookForm from './AddBookForm';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn : false
        };
    };

    changeLoggedIn = (newValue) => this.setState({loggedIn: newValue}) 

    render() {

        return (
            <div>
                {!this.state.loggedIn &&
                    <LoginPanel changeLoggedIn={this.changeLoggedIn}/>
                }
                {this.state.loggedIn && 
                    <AddBookForm />
                }
            </div>
        )}
}

export default AdminPanel;