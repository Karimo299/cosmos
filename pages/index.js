import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";

import ImageList from "../components/ImageList";
import styles from "../styles/Home.module.css";
import { NASA_KEY } from "../api.js";

export default function Home() {
  const [pictures, setPictures] = useState([]);
  function getData(count = 6) {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?count=${count}&thumbs=True&api_key=${NASA_KEY}`
      )
      .then((res) => {
        setPictures([...pictures, ...res.data]);
      });
  }

  useEffect(() => {
    getData(12);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cosmos</title>
        <meta
          name="description"
          content="Cosmos is a curated collection of stunning space photos."
        />
      </Head>
      <ImageList pictures={pictures} getData={getData} hasMore={true} isLiked={false}/>
    </div>
  );
}
