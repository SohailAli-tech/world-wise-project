/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./CityItem.module.css";
import { Link, useParams } from "react-router-dom";
import { data } from "react-router-dom";
import { useCities } from "../contexts/CitiesContexts";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

// eslint-disable-next-line react/prop-types
function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  // eslint-disable-next-line react/prop-types
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id ? styles["cityItem--active"] : ""}`}
        // eslint-disable-next-line react/prop-types
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.data}>({formatDate(date)})</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
