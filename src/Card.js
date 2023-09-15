import React from "react";

export const Card = (props) => {
  return (
    <div className=" col-lg-4 col-md-6 col-sm-12 mt-5 text-center">
      <div className=" shadow rounded weatherResultBox">
        <img src={props.imgsrc} className="weatherIcon" />
        <h3>{props.cityNameHeading}</h3>
        <h5 className="weatherCity">{props.cityName} </h5>
        <h6 className="weatherCity">
          {props.cityTemp}
          {props.unit}
        </h6>
        <h5 className="weatherCity">{props.pressureHeading}</h5>
        <h6 className="weatherCity">
          {props.cityPressure}
          {props.pressureUnit}
        </h6>
        <h5 className="weatherCity">{props.humidityHeading}</h5>
        <h6 className="weatherCity">{props.cityHumidity}</h6>
        <h5 className="weatherCity">{props.feelsLikeHeading}</h5>
        <h6 className="weatherCity">
          {props.feelLikeTemp}
          {props.feelsLikeUnit}
        </h6>
        <h5 className="weatherCity">{props.maxTempHeading}</h5>
        <h6 className="weatherCity">
          {props.cityMaxTemp}
          {props.maxTempUnit}
        </h6>
        <h5 className="weatherCity">{props.minTempHeading}</h5>
        <h6 className="weatherCity">
          {props.cityMinTemp}
          {props.minTempUnit}
        </h6>
      </div>
    </div>
  );
};
