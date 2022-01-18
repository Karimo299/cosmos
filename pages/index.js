import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { key } from "../api.json";

export default function Home() {
  const [pictures, setPictures] = useState([]);
  function getData(count = 6) {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?count=${count}&thumbs=True&api_key=${key}`
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
        <meta name="description" content="Cosmos is a curated collection of stunning space photos." />
      </Head>
      <InfiniteScroll
        dataLength={pictures.length}
        next={getData}
        hasMore={true}
        loader={<h4 className={styles.loading}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 900: 2, 1300: 3 }}>
          <Masonry gutter="1rem">
            {pictures
              .filter((picture) => picture.media_type === "image")
              .map((picture) => (
                <Card data={picture} key={picture.date} />
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </div>
  );
}
