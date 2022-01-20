import { useContext, useState } from "react";
import CardStyles from "../styles/Card.module.css";
import { LikedContext } from "../components/LikedContext";

export default function Card({ data }) {
  const [liked, setLiked] = useState(false);
  const [likedList, setLikedList, setData] = useContext(LikedContext);

  function handleLike(liked, data) {
    // A copy of the likedList
    let tempLikedList = likedList;

    // If the current post is in the likedList
    const postInList = tempLikedList.some((e) => e.url === data.url);

    // Adds or removes post from the list
    if (liked && !postInList) {
      tempLikedList.push(data);
    } else if (!liked && postInList) {
      tempLikedList = tempLikedList.filter((obj) => obj.url !== data.url);
    }

    // Set the liked list to the new list
    setLikedList(tempLikedList);

    // sends the new list to the db
    setData(tempLikedList);
  }

  // Automatically sets the liked button to red if the post is in the list
  if (likedList.some((e) => e.url === data.url) && !liked) {
    setLiked(true);
  }

  return (
    <div className={CardStyles.card}>
      <img id={CardStyles.img} src={data.url} alt={data.title} loading="lazy" />
      <div className={CardStyles.text}>
        <div className={CardStyles.top}>
          <h3 className={CardStyles.title}>{data.title}</h3>
          <p className={CardStyles.date}>{data.date}</p>
          <button
            className={`${CardStyles.btn} 
            ${liked ? CardStyles.liked : ""}`}
            onClick={() => {
              handleLike(!liked, data);
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
