import React from "react";

class Weather extends React.Component {
    // Conversion Formula:
    // F = 1.8(K - 273) + 32

  tempConversion = () => {
    return 1.8 * (parseInt(this.props.temperature)- 273) + 32
  }

  render(){
    return(
      <div className="weather-info">
        {this.props.country && this.props.city && <p className="weather__key">Location:
          <span className="weather__value"> {this.props.city},  {this.props.country} </span></p>}
        {this.props.temperature && <p className="weather__key">Temperature (F):
          <span className="weather__value"> {this.tempConversion()} º</span></p>}
        {this.props.humidity && <p className="weather__key">Humidity:
          <span className="weather__value"> {this.props.humidity} %</span></p>}
        {this.props.description && <p className="weather__key">Conditions:
          <span className="weather__value"> {this.props.description} </span></p>}
        {this.props.error && <p className="weather__error">{this.props.error}</p>}

      </div>
    );
  };
};


// const Weather = (props) => {
//   // Conversion Formula:
//   // F = 1.8(K - 273) + 32
//
//   const tempConversion = () => {
//     return {parseInt(props.temperature) }
//   }
//
//   return(
//     <div className="weather-info">
//       {props.country && props.city && <p className="weather__key">Location:
//         <span className="weather__value"> {props.city},  {props.country} </span></p>}
//       {props.temperature && <p className="weather__key">Temperature:
//         <span className="weather__value"> {parseInt(props.temperature) } </span></p>}
//       {props.humidity && <p className="weather__key">Humidity:
//         <span className="weather__value"> {props.humidity} </span></p>}
//       {props.description && <p className="weather__key">Conditions:
//         <span className="weather__value"> {props.description} </span></p>}
//       {props.error && <p className="weather__error">{props.error}</p>}
//
//     </div>
//   )
// };

export default Weather;
