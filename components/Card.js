import {useState} from "react";

import CardStyles from "../styles/Card.module.css";

export default function Card({data}) {

  const [liked, setLiked] = useState(false);
  // console.log(CardStyles.btn, CardStyles.liked)
  return (
    <div className={CardStyles.card}>
      <img id={CardStyles.img} src={data.url} alt={data.title} loading="lazy" />
      <div className={CardStyles.text}>
        <div className={CardStyles.top}>
          <h3 className={CardStyles.title}>{data.title}</h3>
          <p className={CardStyles.date}>{data.date}</p>
          <button className={`${CardStyles.btn} 
          ${liked ? CardStyles.liked: ""}`} onClick={() => {setLiked(!liked);}}>{liked ? "♥" : "♡"}</button>
          <button className={CardStyles.btn} onClick={() => {window.open(data.hdurl, '_blank');}}>⇩</button>
        </div>
        <p>{data.explanation}</p>
        {data.copyright && (
          <p className={CardStyles.date}>© {data.copyright}</p>
        )}
      </div>
    </div>
  );
}
