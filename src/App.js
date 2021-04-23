import React, { useState } from 'react';
import './App.css';



const App = () => {
  let today = new Date();
  let time = today.toLocaleTimeString();
  const [cTime, uTime] = useState(time);
  const currentTime = () => {
    let today = new Date();
    let time = today.toLocaleTimeString();
    uTime(time);
  }

  setInterval(currentTime, 1000);

  let greet;
  let hours = today.getHours();

  if (hours >= 6 && hours < 12) {
    greet = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    greet = "Good Afternoon";
  } else if (hours >= 18 && hours < 20) {
    greet = "Good Evening";
  } else if (hours >= 20 && hours < 6) {
    greet = "Good Night";
  }

  return (<>
    <div id="container">
      <div>
        <h1>{cTime}</h1>
        <h2>{greet}</h2>
      </div>
    </div>
  </>)
}

export default App;