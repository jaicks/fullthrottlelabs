import React, { Component } from 'react';
class UserList extends Component {
    render() {
        const { userData, handleUser } = this.props;
        return (
            <div className={userData.isHeader ? "card mb-3 bg-dark text-white" : "card mb-3 "}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3"> {userData && userData.id}</div>
                        <div className="col-sm-3">{userData && userData.real_name} </div>
                        <div className="col-sm-3"> {userData && userData.tz}</div>
                        <div className="col-sm-3">
                            {userData.isHeader ? "Action" : <button className="btn btn-primary" onClick={() => handleUser(userData)}>View More</button>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;