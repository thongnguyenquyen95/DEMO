import React, { Component } from 'react';
import UserItem from"./UserItem";
export default class User extends Component {
  renderTable=()=>{
    const{userList} = this.props;
    if(userList&&userList.length>0){
      return userList.map((user)=>{
        return <UserItem key={user.id} user={user} />
      })
    }
  }
  render() {
        return (
            <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
        )
    }
}
