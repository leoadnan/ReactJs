import React, {Component} from 'react';
import {Container} from 'flux/utils';
import Autosuggest from 'react-autosuggest-legacy';
import AirportStore from './stores/AirportStore';
import RouteStore from './stores/RouteStore';
import TicketStore from './stores/TicketStore';
import AirportActionCreators from './actions/AirportActionCreators';
import TicketItem from './components/TicketItem';

class App extends Component {
    componentDidMount() {
        AirportActionCreators.fetchAirports();
    }
    componentWillUpdate(nextProps, nextState) {
        let originAndDestinationSelected = nextState.origin && nextState.destination;
        let selectionHasChangedSinceLastUpdate = nextState.origin !== this.state.origin || nextState.destination !== this.state.destination;
        if (originAndDestinationSelected && selectionHasChangedSinceLastUpdate) {
            AirportActionCreators.fetchTickets(nextState.origin, nextState.destination);
        }
    }

    getSuggestions(input, callback) {
        const escapedInput = input.trim().toLowerCase();
        const airportMatchRegex = new RegExp('\\b' + escapedInput, 'i');
        const suggestions = this.state.airports
            .filter(airport => airportMatchRegex.test(airport.city))
            .sort((airport1, airport2) => {
                airport1.city.toLowerCase().indexOf(escapedInput) ;
                airport2.city.toLowerCase().indexOf(escapedInput)
            })
            .slice(0, 7)
            .map(airport => `${airport.city} - ${airport.country} (${airport.code})`);
        callback(null, suggestions);
    }
    handleSelect(target, suggestion, event) {
        const airportCodeRegex = /\(([^)]+)\)/;
        let airportCode = airportCodeRegex.exec(suggestion)[1];
        AirportActionCreators.chooseAirport(target, airportCode);
    }
    render() {
        let ticketList = this.state.tickets.map((ticket) => (
                                            <TicketItem key={ticket.id} ticket={ticket}/>
                                            ));
        return (
            <div>
                <link rel="stylesheet" href="/aircheap.css" />
                <header>
                    <div className="header-brand">
                        <img src="logo.png" height="35"/>
                        <p>Check discount ticket prices and pay using your AirCheap points</p>
                    </div>
                    <div className="header-route">
                        <Autosuggest
                            id='origin'
                            suggestions={this.getSuggestions.bind(this)}
                            onSuggestionSelected={this.handleSelect.bind(this,'origin')}
                            inputAttributes={{placeholder: 'From'}}/>
                        <Autosuggest
                            id='destination'
                            onSuggestionSelected={this.handleSelect.bind(this,'destination')}
                            suggestions={this.getSuggestions.bind(this)}
                            inputAttributes={{placeholder: 'To'}}/>
                    </div>
                </header>
                <div>
                    {ticketList}
                </div>
            </div>
        );
    }
}
App.getStores = () => ([AirportStore, RouteStore, TicketStore]);
App.calculateState = (prevState) => ({
    airports: AirportStore.getState(),
    origin : RouteStore.get('origin'),
    destination : RouteStore.get('destination'),
    tickets : TicketStore.getState()
});

const AppContainer = Container.create(App);

export default AppContainer ;
