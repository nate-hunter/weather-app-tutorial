import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const APIKEY = "84abaced8c646f638bb1d26eafb9548c"

class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async (e) => {
      e.preventDefault();

      const city = e.target.elements.city.value
      const country = e.target.elements.country.value

      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`);
      const response = await api_call.json();

      if (city && country) {
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ''
        });
        console.log(response);
      } else {
        this.setState({
          error: "Please enter the values..."
        });
      };
  };

  render() {

    return (

      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                <Form loadWeather={this.getWeather}/>
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default App;
