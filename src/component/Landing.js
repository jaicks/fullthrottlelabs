import React, { Component } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserModal from './UserModal';
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            userData: [],
            selectedUser: {}
        }
    }
    componentDidMount() {
        axios.get('./data.json')
            .then(res => {
                if (res.data && res.data.members) {
                    this.setState({ userData: res.data.members })
                }
            })
    }
    handleUser = (data) => {
        console.log(data);
        this.setState({ open: true, selectedUser: data })
    }

    handleModalClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { userData, open, selectedUser } = this.state;
        let headerData = {
            id: "ID",
            real_name: "User Name",
            tz: "Time Zone",
            isHeader: true
        }
        return (
            <div className="container">
                <h1 className="text-success my-4">User List</h1>
                <UserList
                    userData={headerData}
                    handleUser={this.handleUser}
                />
                { userData && userData.length > 0 && (
                        userData.map((data, index) => {
                            return (
                                <UserList
                                    key={index}
                                    userData={data}
                                    handleUser={this.handleUser}
                                />
                            )
                        })
                    )
                }
                {open && <UserModal 
                            handleClose={this.handleModalClose} 
                            selectedUser= {selectedUser}
                         />}
            </div>
        )
    }
}

export default Landing;