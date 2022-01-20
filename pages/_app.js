import "../styles/globals.css";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

// Firebase Imports
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { firebaseConfig } from "../api";

import { LikedContext } from "../components/LikedContext";

// Initializing Firebase app and getting the data base
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbref = ref(db, "/likedList");


// Main App component
function MyApp({ Component, pageProps }) {
  const [likedList, setLikedList] = useState([]);

  // Fetch the data from the firebase database
  function fetchData() {
    onValue(dbref, (snapshot) => {
      const output = snapshot.val();
      if (output === null) output = [];
      setLikedList(output);
    });
  }

  // Sends the data to the database
  function setData(data) {
    set(dbref, data);
  }

  // Loads the data when the app is first loaded
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LikedContext.Provider value={[likedList, setLikedList, setData]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LikedContext.Provider>
  );
}

export default MyApp;
