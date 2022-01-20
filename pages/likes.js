import { useContext } from "react";
import { LikedContext } from "../components/LikedContext";

import ImageList from "../components/ImageList";

export default function likes() {
  const [likedList] = useContext(LikedContext);

  return <ImageList pictures={likedList} getData={null} hasMore={false} />;
}
