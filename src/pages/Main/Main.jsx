import { useEffect, useState } from "react";
import Card from "../../components/Card";
import WeatherIcon from "../../components/WeatherIcon";
import useFetch from "../../hooks/useFetch";

import styles from "./Main.module.css";

const Main = () => {
  const [weather, setWeather] = useState(null);
  const [, setWeatherError] = useState(null);
  const [{ response: responseIpData }, fetchIpData] = useFetch(
    "http://ip-api.com/json/?lang=ru"
  );

  useEffect(() => {
    fetchIpData();
  }, [fetchIpData]);

  useEffect(() => {
    if (!responseIpData) {
      return null;
    }

    const { lat, lon } = responseIpData;

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      })
      .catch((err) => {
        console.log(err);
        setWeatherError("something went wrong");
      });
  }, [responseIpData]);

  return (
    <Card>
      <div className={styles.columns}>
        <div className={styles.info}>
          <div className={styles.placename}>{responseIpData?.city || ""}</div>
          <div className={styles.temperature}>
            {weather?.current_weather
              ? `${weather.current_weather.temperature}°C`
              : ""}
          </div>
        </div>

        <div className={styles.imagewrapper}>
          {weather && (
            <WeatherIcon code={weather.current_weather.weathercode} />
          )}
        </div>
      </div>
    </Card>
  );
};

export default Main;
