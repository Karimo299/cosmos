import { useContext } from "react";
import { LikedContext } from "../components/LikedContext";

import ImageList from "../components/ImageList";

export default function Likes() {
  const [likedList] = useContext(LikedContext);

  return <ImageList pictures={likedList.reverse()} getData={null} hasMore={false} />;
}
