import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

import Card from "../components/Card";
import styles from "../styles/ImageList.module.css";

export default function ImageList({ pictures, getData, hasMore }) {
  if (pictures === null) {
    return <h4 className={styles.loading}>No Liked Pictures</h4>;
  } else if (pictures.length !== 0) {
    return (
      <InfiniteScroll
        dataLength={pictures.length}
        next={getData}
        hasMore={hasMore}
        loader={<h4 className={styles.loading}>Loading...</h4>}
        endMessage={
          <div style={{ textAlign: "center", paddingTop: 10 }}>
            <h4 className={styles.loading}>Thats All!</h4>
          </div>
        }
      >
        <ResponsiveMasonry columnsCountBreakPoints={{100: 1, 900: 2, 1300: 3 }}>
          <Masonry gutter="1rem">
            {pictures
              .filter((picture) => picture.media_type === "image")
              .map((picture, indx) => (
                <Card data={picture} key={indx} />
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    );
  } else {
    return <h4 className={styles.loading}>Loading...</h4>;
  }
}
