import React, {Component} from 'react';

class DisplayTicket extends Component {
    constructor() {
        super();
        this.state = {};
    }

    createListElements(tickets) {
        var panels =tickets.map (item => {
            return (
                <div key={item.date} className="panel panel-default">
                    <div className="panel-body">
                        {item.issueType}<br/> {item.email}<br/> {item.comment}
                    </div>
                    <div className="panel-footer">
                        {item.date.toString()}
                    </div>
                </div>
            );
        });
        return panels;
    }
    render() {
        var listItemElements = this.createListElements(this.props.allTickets);
        return (
            <div
                className={listItemElements.length !== 0 ? "" : "bg-info"}>
                {listItemElements.length > 0 ? listItemElements : "You have not raised any ticket yet. Fill this form to submit the ticket"}
            </div>
        );
    }
}

export default DisplayTicket;