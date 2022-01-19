import { useEffect, useState } from "react";
import CardStyles from "../styles/Card.module.css";
import { fetchData, setData } from "./databaseUtils";

export default function Card({ data }) {
  const [liked, setLiked] = useState(false);
  const [likedPics, setLikedPics] = useState([]);

  useEffect(() => {
    fetchData(setLikedPics);
  }, []);

  function updateLike() {
    if (likedPics.some((e) => e.url === data.url) && !liked) {
      setLiked(true);
    }
  }

  return (
    <div className={CardStyles.card}>
      {likedPics !== null && updateLike()}
      <img id={CardStyles.img} src={data.url} alt={data.title} loading="lazy" />
      <div className={CardStyles.text}>
        <div className={CardStyles.top}>
          <h3 className={CardStyles.title}>{data.title}</h3>
          <p className={CardStyles.date}>{data.date}</p>
          <button
            className={`${CardStyles.btn} 
            ${liked ? CardStyles.liked : ""}`}
            onClick={() => {
              setData(!liked, data);
              setLiked(!liked);
            }}
          >
            {liked ? "♥" : "♡"}
          </button>
          <button
            className={CardStyles.btn}
            onClick={() => {
              window.open(data.hdurl, "_blank");
            }}
          >
            ⇩
          </button>
        </div>
        <p>{data.explanation}</p>
        {data.copyright && (
          <p className={CardStyles.date}>© {data.copyright}</p>
        )}
      </div>
    </div>
  );
}
