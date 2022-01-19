import { useState, useEffect } from "react";
import Head from "next/head";

import ImageList from "../components/ImageList";
import { fetchData } from "../components/databaseUtils";

import LikesStyles from "../styles/LikesStyles.module.css";

export default function likes() {
  const [likedPics, setLikedPics] = useState([]);
  useEffect(() => {
    fetchData(setLikedPics);
  }, []);


  return (
    <div className={LikesStyles.container}>
      <Head>
        <title>Cosmos</title>
        <meta
          name="description"
          content="Cosmos is a curated collection of stunning space photos."
        />
      </Head>
      <ImageList pictures={likedPics} getData={null} hasMore={false}/>
    </div>
  );
}
