import React from 'react';

class AdminPanel extends React.Component {
    render() {

        return (
            <div className="adminPanel col-xs-4">
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Book name" id="name" name="name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book author" id="author" name="author" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Book description" id="description" name="description" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="onStock" name="onStock" className="form-check-input"/>
                        <label for="onStock" className="form-check-label">On stock</label>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Book image" id="image" name="image" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>);
    }
}

export default AdminPanel;