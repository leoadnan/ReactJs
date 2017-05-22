import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends Component {
    propTypes = {
        title: PropTypes.string,
        text: PropTypes.string,
        link: PropTypes.string
    }

    static defaultProps = {

        title: "This is the title.",
        text: "This is a simple hero unit, a simple jumbotron-style component for calling extra" +
                " attention to featured content or information."
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <p>
                    <a className="btn btn-primary btn-lg" href="#" onClick={this.handleOnClick.bind(this,'Hello')} role="button">Learn more</a>
                </p>
            </div>
        );
    }

    handleOnClick(greeting){
        alert(greeting)
    }
}

/*Jumbotron.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string
}*/
export default Jumbotron;