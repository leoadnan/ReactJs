import React, {Component} from 'react';
import AddTicketForm from './AddTicketForm';
import DisplayTicket from './DisplayTicket';

class Tickets extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    addTicketList(ticket) {
        var list = this.state.list;
        list.push(ticket);
        this.setState({list: list});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <DisplayTicket allTickets={this.state.list}/>
                        <AddTicketForm addTicketList={this.addTicketList.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tickets;