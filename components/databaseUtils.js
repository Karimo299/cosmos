// Firebase Imports
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { firebaseConfig } from "../api";

// Initializing Firebase app and getting the data base
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbref = ref(db, "/likedList");

// Fetch the data from the db
export function fetchData(setLikedPosts) {
  onValue(dbref, (snapshot) => {
    const output = snapshot.val();
    setLikedPosts(output.reverse());
  });
}

// Set Data to the db
export function setData(liked, data) {
  get(dbref)
    .then((snapshot) => {
      const output = snapshot.val();
      if (output === null) output = [];
      
      const postInList = output.some((e) => e.url === data.url);
      if (liked && !postInList) {
        output.push(data);
      } else if (!liked && postInList) {
        output = output.filter((obj) => obj.url !== data.url);
      }
      set(dbref, output);
    })
    .catch((error) => {
      console.error(error);
    });
}
