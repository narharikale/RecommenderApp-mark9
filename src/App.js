import { useState } from "react";
import "./styles.css";

var channelsDB = {
  Podcast: [
    { name: "Joe rogan exeperience", rating: "3/5" },
    { name: "The ranveer show", rating: "5/5" }
  ],
  Vlog: [
    { name: "Ankit Bhatia", rating: "5/5" },
    { name: "Jeevan Kadam vlogs", rating: "4/5" }
  ],
  News: [
    { name: "BBC Marathi", rating: "4.6/5" },
    { name: "Wion News", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedChCategry, setselectedChCategry] = useState("Vlog");

  function onclickHandler(chcategory) {
    setselectedChCategry(chcategory);
  }

  return (
    <div className="App">
      {" "}
      <div
        style={{
          display: "flex",
          fontSize: "xx-large",
          alignItems: "center"
        }}
      >
        <img
          src="https://img.icons8.com/color/50/000000/youtube-play.png"
          alt="broken"
        />{" "}
        YT channel Recommender{" "}
      </div>
      <div>
        {Object.keys(channelsDB).map((chcategory) => {
          return (
            <button onClick={() => onclickHandler(chcategory)}>
              {chcategory}
            </button>
          );
        })}
        <hr></hr>
      </div>
      <ul>
        {channelsDB[selectedChCategry].map((channel) => (
          <li
            key={channel.name}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid rgb(209, 213, 219)",
              width: "100%",
              margin: "1rem 0rem"
            }}
          >
            <div style={{ textAlign: "left" }}>{channel.name} </div>
            <div style={{ textAlign: "left" }}>{channel.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Object.keys(bookDB).map((genre)     {bookDB[selectedGenre].map((book)
// const bookDB = {
// javascript: [
//   { name: "Eloquent JavaScript", rating: "4/5" },
//   { name: "You Don't Know JS", rating: "3.5/5" }
// ],