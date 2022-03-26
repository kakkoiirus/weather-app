import styles from "./WeatherIcon.module.css";

const getIcon = (code) => {
  switch (code) {
    case 0:
      return "/images/003-sun.png";
    case 1:
    case 2:
      return "/images/002-cloudy.png";
    case 3:
      return "/images/001-cloud.png";
    default:
      return "/images/001-cloud.png";
  }
};

const WeatherIcon = ({ code }) => {
  return <img className={styles.image} src={getIcon(code)} alt="" />;
};

export default WeatherIcon;
