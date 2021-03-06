import React from "react";

const Weather = props => (
      <div>
        {
          props.city && props.country &&<p>
            Location: {props.city}, {props.country}</p>
        }
        {
          props.latitude &&<p>
            Latitude: {props.latitude}</p>
        }
        {
          props.longitude &&<p>
            Longitude: {props.longitude}</p>
        }

        {
          props.temperature &&<p>
            Temperature: {props.temperature}</p>
        }
        {
          props.humidity &&<p>
            Humidity: {props.humidity}</p>
        }
        {
          props.windspeed &&<p>Windspeed: {props.windspeed} mph</p>
        }
        {
          props.description &&<p>
            Description: {props.description}</p>
        }
        {
          props.error &&<p>{props.error}</p>
        }

      </div>
)

export default Weather;
