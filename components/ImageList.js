import Head from "next/head";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../components/Card";
import styles from "../styles/ImageList.module.css";

export default function ImageList({ pictures, getData, hasMore }) {
  if (pictures.length !== 0) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Cosmos</title>
          <meta
            name="description"
            content="Cosmos is a curated collection of stunning space photos."
          />
        </Head>
        <InfiniteScroll
          dataLength={pictures.length}
          next={getData}
          hasMore={hasMore}
          loader={<h4 className={styles.loading}>Loading...</h4>}
          endMessage={
            <div style={{ textAlign: "center", paddingTop: 20 }}>
              <h4 className={styles.loading}>Thats All!</h4>
            </div>
          }
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 900: 2, 1300: 3 }}>
            <Masonry gutter="1rem">
              
              {/* Loops through all the picutures and displays them if they are of the Image type */}
              {pictures
                .filter((picture) => picture.media_type === "image")
                .map((picture, indx) => (
                  <Card data={picture} key={indx} />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </InfiniteScroll>
      </div>
    );
  } else if (pictures.length === 0 && !hasMore) {
    return (
      <div style={{ textAlign: "center", paddingTop: 20 }}>
        <h4 className={styles.loading}>No Liked Pictures</h4>
      </div>
    );
  } else {
    return (
      <div style={{ textAlign: "center", paddingTop: 20 }}>
        <h4 className={styles.loading}>Loading...</h4>
      </div>
    );
  }
}
