import { useEffect, useState } from "react";
import axios from "axios";

import ImageList from "../components/ImageList";
import { NASA_KEY } from "../api.js";

export default function Home() {
  const [pictures, setPictures] = useState([]);

  // Fetch pictures from Nasa's API
  function getData(count = 6) {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?count=${count}&thumbs=True&api_key=${NASA_KEY}`
      )
      .then((res) => {
        setPictures([...pictures, ...res.data]);
      });
  }

  // Innitally fetch 12 pictures from the nasa API
  useEffect(() => {
    getData(12);
  }, []);

  return <ImageList pictures={pictures} getData={getData} hasMore={true} isLiked={false}/>;
}
