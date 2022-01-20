# Cosmos

Cosmos is a curated collection of stunning space photos. They’ve been collected from NASA, and provide a glimpse into the vast beauty of our universe. For those who want to look out into the vastness of space and feel their heart swell with awe, Cosmos is the perfect website. Explore new worlds, and travel to places that we’ve never been before.

---

# Table of Contents
1. [About This Project](#about-this-project)
    * [Roadmap](#roadmap)
    * [Built With](#built-with)
    
2. [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Usage](#usage)

---

## About This Project
<div>
<p> This Project is still WIP </p>

<div>
<div style="padding:1rem">
<p style="flex: 1"> 
</p>
</div>
</div>

### Roadmap
1) Improve the speed of the website
    * ~~Infinite Scrolling (Load more button temporary)~~
    * ~~Better image lazy loading~~

2) ~~Add liking system~~
### Built With

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/docs/getting-started)
- [Nasa's Astronomy Picture of the Day(APOD)](https://github.com/nasa/apod-api)
- [react-responsive-masonry](https://github.com/cedricdelpoux/react-responsive-masonry)
- [Firebase](https://firebase.google.com/)
- [Axios](https://axios-http.com/)

---

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/downloads)
- npm which automatically comes with [Node.js](https://nodejs.org/en/download/)
- [Nasa's API](https://api.nasa.gov/) to generate your API key.
- [Firebase](https://firebase.google.com/)

### Usage

1. Clone the repo

```console
git clone https://github.com/karimo299/cosmos.git
```

2. Navigate to the cosmos directory

```console
cd cosmos
```

3. install all the dependacies by running

```console
npm install
```

4. Before running the project, youll need to grab an API key from [Nasa's Website](https://api.nasa.gov/) by creating an account. Then You will be able to generate a key which you can paste in the `api.js` file, instead of "Insert API Key".

5. After grabbing the Nasa API, head to the [Firebase](https://firebase.google.com/) website, Login and click "Get started", the add a new project. Then Click on the web icon to create a new web application. There you can give the app any name you would like, I would recommend cosmos to match the project name and click register. Then grab the contents of the firebaseConfig which should look like this
``` 
firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
}
```

replace the data from the `api.js` file.

Navigate to the Realtime Database section and create a new database, in test mode.

5. To start the project, simply run

```console
npm run dev
```