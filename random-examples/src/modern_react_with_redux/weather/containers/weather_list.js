import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
// import GoogleMap from '../components/google_map';

class WeatherList extends Component {
   renderWeather(cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(w => w.main.pressure);
      const humidities = cityData.list.map(w => w.main.humidity);
      const {lon, lat} = cityData.city.coord;

      return (
         <tr key={name}>
            {/*<td><GoogleMap lon={lon} lat={lat}/> </td>*/}
            <td>{name}</td>
            <td>
               <Chart color="red" data={temps} units="K"/>
            </td>
            <td>               
               <Chart color="green" data={pressures} units="hPa"/>
            </td>
            <td>   
               <Chart color="black" data={humidities} units="%"/>
            </td>
         </tr>
      );
   }
   render() {
      return (
         <table className="table table-hover">
            <thead>
               <tr>
                  <th>City</th>
                  <th>Temperature (K)</th>
                  <th>Pressure (hPa)</th>
                  <th>Humidity (%)</th>
               </tr>
            </thead>
            <tbody>
               {this
                  .props
                  .weather
                  .map(this.renderWeather)}
            </tbody>
         </table>
      );
   }
}
function mapStateToProps({weather}) {
   return {weather}
}
export default connect(mapStateToProps, null)(WeatherList);