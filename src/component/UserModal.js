import React, { Component } from 'react';
import moment from 'moment'
class UserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: ""
        }
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedDate: e.target.value })
    }
    render() {
        const activity_period = this.props.selectedUser && this.props.selectedUser.activity_periods;
        console.log(activity_period);
        let filterData = [];
        if (this.state.selectedDate !== "") {
            let date = moment(this.state.selectedDate).format("MMM D YYYY")
            filterData = activity_period.filter(d => d && (d.start_time).includes(date));
        } else {
            filterData = activity_period;
        }
        return (
            <div className="modal  d-block" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">User Activity Detail</h5>
                            <button type="button" className="btn btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className="text-success">Please select date for filter Activity </p>
                            <div className="d-flex justfily-content-between">
                                <input className="form-control" type="date" value={this.state.selectedDate} onChange={(e) => this.handleChange(e)} />
                                <button className="btn btn-primary ml-2" onClick={() => this.setState({ selectedDate: "" })}>Clear</button>
                            </div>
                            <div className="row border mt-3 bg-dark text-white" >
                                <div className="col-sm-6">Start Time</div>
                                <div className="col-sm-6">End Time</div>
                            </div>
                            {
                                filterData && filterData.length > 0 ? (
                                    filterData.map((data, index) => {
                                        return (
                                            <div className="row border mt-3 " key={index} >
                                                <div className="col-sm-6">{data.start_time}</div>
                                                <div className="col-sm-6">{data.end_time}</div>
                                            </div>
                                        )
                                    })
                                ) : (
                                        <div className="text-center">Data not found</div>
                                    )
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.props.handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserModal;