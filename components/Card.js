import React from "react";

import CardStyles from "../styles/Card.module.css";

export default function Card({data}) {
  return (
    <div className={CardStyles.card}>
      {data.hdurl && <img id={CardStyles.img} src={data.hdurl} alt={data.title} loading="lazy"/>}
      {data.thumbnail_url && <img id={CardStyles.img} src={data.thumbnail_url} alt={data.title} loading="lazy"/>}
      <div className={CardStyles.text}>
        <h3 className={CardStyles.title}>{data.title}</h3>
        <p className={CardStyles.date}>{data.date}</p>
        <p>{data.explanation}</p>
      </div>
    </div>
  );
}
