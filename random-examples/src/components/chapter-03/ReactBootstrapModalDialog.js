import React, {Component} from 'react';
import $ from 'jquery';

window.$ = $;

class BootstrapModal extends Component {
    componentDidMount() {
        console.log(this.refs);
        // When the component is mount into the DOM
        $(this.refs.modal_main).modal({keyboard: true, show: false});
        // capture the Bootstrap's modal events
        $(this.refs.modal_main).on('hidden.bs.modal', this.handleHidden.bind(this));
    }
    componentWillUnmount() {
        $(this.refs.modal_main).off('hidden.bs.modal', this.handleHidden.bind(this));
    }
    close() {
        $(this.refs.modal_main).modal('hide');
    }
    open() {
        $(this.refs.modal_main).modal('show');
    }
    handleCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
    handleConfirm() {
        if (this.props.onConfirm) {
            this.props.onConfirm();
        }
    }
    handleHidden() {
        if (this.props.onHidden) {
            this.props.onHidden();
        }
    }
    render() {
        var confirmButton = null;
        var cancelButton =  null;

        if (this.props.confirm) {
            confirmButton = (
                <BootstrapButton onClick={this.handleConfirm} className="btn-primary">
                    {this.props.confirm}
                </BootstrapButton>
            );
        }
        if (this.props.cancel) {
            cancelButton = (
                <BootstrapButton onClick={this.handleCancel} className="btn-default">
                    {this.props.cancel}
                </BootstrapButton>
            );
        }
        return (
            <div className="modal fade" ref="modal_main">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.handleCancel.bind(this)}>&times;</button>
                            <h3>{this.props.title}</h3>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            {cancelButton}
                            {confirmButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class BootstrapButton extends Component {
    render() {
        return (<button
            {...this.props}
            role="button"
            type="button"
            className={(this.props.className || '') + ' btn'}/>);
    }
}

class ReactBootstrapModalDialog extends Component {
    handleCancel() {
        if ($.confirm('Are you sure you want to cancel the dialog info?')) {
               this.refs.modal.close();
        }
    }
    openModal() {
        this.refs.modal.open();
    }
    closeModal() {
        this.refs.modal.close();
    }
    handleModalDidClose() {
        alert("The modal has been dismissed!");
    }
    render() {
        var modal = 
            <BootstrapModal
                ref="modal"
                confirm="OK"
                cancel="Cancel"
                onCancel={this.handleCancel.bind(this)}
                onConfirm={this.closeModal.bind(this)}
                onHidden={this.handleModalDidClose.bind(this)}>
                   This is a React component powered by jQuery and Bootstrap!
            </BootstrapModal>
        return(
            <div className="modalbtn">
                {modal}
                <BootstrapButton onClick={this.openModal} className="btn-default">Open modal</BootstrapButton>
            </div>
        );
    }
}
export default ReactBootstrapModalDialog;