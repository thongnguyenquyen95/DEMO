import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div
            className="modal fade"
            id="modelIdUser"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">ADD USER</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form >
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" name="username"  />
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" className="form-control" name="name"  />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="text" className="form-control" name="email" />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="text" className="form-control" name="phoneNumber"  />
                    </div>
                    <div className="form-group">
                      <label>Type</label>
                      <select className="form-control" name="type" >
                        <option>USER</option>
                        <option>VIP</option>
                      </select>
                    </div>
                    <button type="submit" className="btn btn-success" >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
