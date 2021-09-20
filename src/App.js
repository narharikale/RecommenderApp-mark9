import { useState } from "react";
import "./styles.css";

var channelsDB = {
  Podcast: [
    {
      name: "Joe rogan exeperience",
      desc: "It introduce you to great people in world",
      rating: "3/5"
    },
    { name: "The ranveer show", desc: "Best indian podcast", rating: "5/5" },
    { name: "Ted Talks", desc: "For new ideas and innovation", rating: "4.5/5" }
  ],
  Vlog: [
    { name: "Ankit Bhatia", desc: "Amazing videography", rating: "5/5" },
    { name: "Jeevan Kadam vlogs", desc: "Best in marathi", rating: "4/5" },
    { name: "BB ki vines", desc: "Comedy", rating: "4.5/5" }
  ],
  News: [
    { name: "BBC News", desc: "Best for global news", rating: "4.6/5" },
    { name: "Wion News", desc: "My personal favourite", rating: "5/5" },
    { name: "Abp Maza", desc: "Best Marathi", rating: "3/5" }
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
            <button
              style={{ borderRadius: "10px" }}
              onClick={() => onclickHandler(chcategory)}
            >
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
              border: "1px solid #54ea45",
              boxShadow: " #4a5444 7px 6px 6px 1px",
              borderRadius: "5px",
              width: "100%",
              margin: "1rem 0rem"
            }}
          >
            <div style={{ textAlign: "left" }}>{channel.name} </div>
            <div style={{ textAlign: "left" }}>Desc: {channel.desc}</div>
            <div style={{ textAlign: "left" }}>Rating: {channel.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

