import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "7d7f65f5dbdd6ac6e625edd120fd9008";

class App extends React.Component {

  //state is an object with key-value pairs
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (event) => {

    event.preventDefault(); // prevents default behavior when button is pressed
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const api_call =
      await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
      const data = await api_call.json();
      console.log(data);
      if(city && country) {
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          latitude: data.coord.lat,
          longitude: data.coord.lon,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          latitude: undefined,
          longitude: undefined,
          humidity: undefined,
          windspeed: undefined,
          description: undefined,
          error: "Please enter the city and country"
        });
      }

  }

  render(){
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">

                <div className="col-xs-5 title-container">
                  <Titles />
                </div>

                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <span style={{color:"white"}}><Weather
                    temperature = {this.state.temperature}
                    city = {this.state.city}
                    country = {this.state.country}
                    latitude = {this.state.latitude}
                    longitude = {this.state.longitude}
                    humidity = {this.state.humidity}
                    windspeed = {this.state.windspeed}
                    description = {this.state.description}
                    error = {this.state.error}
                    /></span>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );


  }
}

export default App;
