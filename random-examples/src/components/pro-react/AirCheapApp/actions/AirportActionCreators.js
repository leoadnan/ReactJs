import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import AirCheapAPI from '../api/AirCheapAPI';

let AirportActionCreators = {
    // fetchAirports() {
    //     AppDispatcher.dispatchAsync(AirCheapAPI.fetchAirports(), {
    //         request: constants.FETCH_AIRPORTS,
    //         success: constants.FETCH_AIRPORTS_SUCCESS,
    //         failure: constants.FETCH_AIRPORTS_ERROR
    //     });
    // },
    // fetchTickets(origin, destination) {
    //     AppDispatcher.dispatchAsync(AirCheapAPI.fetchTickets(origin, destination), {
    //         request: constants.FETCH_TICKETS,
    //         success: constants.FETCH_TICKETS_SUCCESS,
    //         failure: constants.FETCH_TICKETS_ERROR
    //     });
    // },
    fetchAirports() {
        AirCheapAPI.fetchAirports();
        AppDispatcher.dispatch({
            type: constants.FETCH_AIRPORTS
        });
    },
    fetchAirportsSuccess(response) {
        AppDispatcher.dispatch({
            type: constants.FETCH_AIRPORTS_SUCCESS, 
            payload: {response}
        });
    },
    fetchAirportsError(error) {
        AppDispatcher.dispatch({
            type: constants.FETCH_AIRPORTS_ERROR, 
            payload: {error}
        });
    },
    chooseAirport(target, code) {
        console.log("chooseAirport ", target , code);
        AppDispatcher.dispatch({
            type: constants.CHOOSE_AIRPORT, 
            target, 
            code
        });
    },
    fetchTickets() {
        AirCheapAPI.fetchTickets();
        AppDispatcher.dispatch({
            type: constants.FETCH_TICKETS
        });
    },
    fetchTicketsSuccess(response) {
        AppDispatcher.dispatch({
            type: constants.FETCH_TICKETS_SUCCESS, 
            payload: {response}
        });
    },
    fetchTicketsError(error) {
        AppDispatcher.dispatch({
            type: constants.FETCH_TICKETS_ERROR, 
            payload: {error}
        });
    }
}

export default AirportActionCreators;