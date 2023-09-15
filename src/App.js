import "./App.css";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import { Grid, Box, Button, Container } from "@mui/material";
import { Card } from "./Card";
import bannerImg from "./Images/bannerImg.png";
import cardImg from "./Images/cardImg.png";
const App = () => {
  const [data, setdata] = useState({});
  const [inputCity, setInputCity] = useState("");
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const getWeatherDetail = (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ea3f915a00755b8723529749798b9af4`;
    axios
      .get(apiUrl)
      .then((response) => {
        setdata(response.data);
        console.log("responseeee", response.data);
        setError("");
      })
      .catch((err) => {
        setError(err);
      });
  };
  const handleSearch = () => {
    getWeatherDetail(inputCity);
    setInputCity("");
  };
  const handleChangeInput = (event) => {
    setInputCity(event.target.value);
  };
  const handleShow = () => {
    setShow(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <Grid container>
        <Grid lg={12} md={12} sm={12} xs={12}>
          <Box
            className="weatherBg"
            sx={{ backgroundImage: `url(${bannerImg})` }}
          >
            <h1 className="heading">Weather App</h1>
            <input
              type="search"
              value={inputCity}
              onChange={handleChangeInput}
              className="input"
              placeholder="Enter City Name"
            />
            <Button
              variant="contained"
              onClick={() => {
                handleSearch();
                handleShow();
              }}
              sx={{ marginTop: "20px" }}
            >
              search
            </Button>
          </Box>
        </Grid>
      </Grid>

      {Loading ? (
        <div className="spinner">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : error ? (
        <h1 className="error">Match not found</h1>
      ) : (
        <Box className={`hidden ${show ? "visibilty" : ""}`}>
          <Container>
            <Grid container lg={12}>
              <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
                <Box className="cardCenter">
                  <Card
                    imgsrc={cardImg}
                    unit="°C"
                    cityName={data?.name}
                    cityTemp={data?.main?.temp}
                  />
                </Box>
              </Grid>
              <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
                <Box className="cardCenter">
                  <Card
                    imgsrc={cardImg}
                    pressureHeading="Pressure"
                    pressureUnit=" &nbsp;Pa"
                    cityPressure={data?.main?.pressure}
                  />
                </Box>
              </Grid>
              <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
                <Box className="cardCenter">
                  <Card
                    imgsrc={cardImg}
                    humidityHeading="Humidity"
                    cityHumidity={data?.main?.humidity}
                  />
                </Box>
              </Grid>
              <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
                <Box className="cardCenter">
                  <Card
                    imgsrc={cardImg}
                    feelsLikeHeading="Feels Like"
                    feelsLikeUnit="°C"
                    feelLikeTemp={data?.main?.feels_like}
                  />
                </Box>
              </Grid>
              <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
                <Box className="cardCenter">
                  <Card
                    imgsrc={cardImg}
                    maxTempHeading="Maximum Temp"
                    maxTempUnit="°C"
                    cityMaxTemp={data?.main?.temp_max}
                  />
                </Box>
              </Grid>
              <Grid item lg={3.5} md={3.5} sm={5.5} xs={12}>
                <Box className="cardCenter">
                  <Card
                    imgsrc={cardImg}
                    minTempHeading="Minimum Temp"
                    minTempUnit="°C"
                    cityMinTemp={data?.main?.temp_min}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
};

export default App;
