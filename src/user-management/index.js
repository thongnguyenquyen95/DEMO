import React, { Component } from 'react';
import Modal from "./Modal";
import User from "./User";
import Search from "./Search";
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            userList:[
                {
                    id: 1,
                    name: "Dinh Phuc Nguyen",
                    username: "dpnguyen",
                    email: "dpnguyen@gmail.com",
                    phoneNumber: "1123123213",
                    type: "VIP"
                  },
                  {
                    id: 2,
                    name: "Nguyen Dinh Phuc",
                    username: "nguyendp",
                    email: "nguyendp@gmail.com",
                    phoneNumber: "1123123213",
                    type: "VIP"
                  }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">User Management</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <Search />
                    <button
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                    >
                        Add User
                    </button>
                </div>
                <User userList={this.state.userList}/>
                <Modal />
            </div>
        )
    }
}
