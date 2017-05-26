import React, {Component} from 'react';
import BootstrapAlert from './BootstrapAlert';

const style = {color: "#ffaaaa"};
const max_Char=140;

class AddTicketForm extends Component {
    
    constructor() {
        super()
        this.state = {
            value: 'Controlled!!!', char_Left: max_Char
        }
    }

    handleSubmitEvent(event) {
        event.preventDefault();
        var values  = {
               date: new Date(),
               email: this.refs.email.value.trim(),
               issueType: this.refs.issueType.value.trim(),
               department: this.refs.department.value.trim(),
               comment: this.refs.comment.value.trim()
            };
        this.props.addTicketList(values);
    }
    handleChange(event) {
        var input = event.target.value;
        this.setState({value: input.substr(0, max_Char), char_Left: max_Char - input.length});
        if (input.length === max_Char){
            this.refs.alertBox.show();
        }
        else{
            this.refs.alertBox.hide();
        }
    }
    // handleClose() {
    //     this.refs.alertBox.close();
    // }
    render() {
        var alertBox = <BootstrapAlert className="alert-warning fade in" ref="alertBox"/>;
        var formHtml = 
            <form onSubmit={this.handleSubmitEvent.bind(this)}>
                <div className="form-group">
                    <label htmlFor="email">Email<span style={style}>*</span></label>
                    <input
                        type="email"
                        id="email"
                        ref="email"
                        className="form-control"
                        placeholder="Enter email"
                        required/>
                </div>
                <div className="form-group">
                    <label htmlFor="issueType">Issue Type<span style={style}>*</span></label>
                    <select className="form-control" id="issueType" ref="issueType" required>
                        <option value="">-----Select----</option>
                        <option value="Access Related Issue">Access Related Issue</option>
                        <option value="Email Related Issues">Email Related Issues</option>
                        <option value="Hardware Request">Hardware Request</option>
                        <option value="Health & Safety">Health & Safety</option>
                        <option value="Network">Network</option>
                        <option value="Intranet">Intranet</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="department">Assign Department<span style={style}>*</span></label>
                    <select className="form-control" id="department" ref="department" required>
                        <option value="">-----Select----</option>
                        <option value="Admin">Admin</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Development">Development
                        </option>
                    </select>
                </div>
                <div className="form-group">
                    {alertBox}
                    <label htmlFor="comments">Comments<span style={style}>*</span></label>(<span id="maxlength">{this.state.char_Left}</span> characters left)
                    <textarea ref="comment" className="form-control" rows="3" id="comments" required maxLength={max_Char} value={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="reset" className="btn btn-link">cancel</button>
                </div>
            </form>
        return (formHtml);
    }
}

export default AddTicketForm;