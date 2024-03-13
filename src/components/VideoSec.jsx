import React, { useState } from "react";



// import { IoCloseCircleSharp } from 'react-icons/io';
import { AiFillCloseCircle } from "react-icons/ai";

const VideoSec = () => {
  const [popup, setPopup] = useState(false);

  return (
    <div className="video-section">
      <div className="container">
        <img
          src={"/assets/video.png"}
          onClick={() => {
            setPopup(!popup);
          }}
          alt="video"
        />

        <h3>
          Capture the perfect <span className="gray"> moments that will </span>{" "}
          make <br /> memories.
        </h3>
      </div>

      <div className={`popup ${popup ? "active" : ""}`}>
        <div className="video">
          <span
            className="close"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            <AiFillCloseCircle />
          </span>
          <iframe
            width="100%"
            className="frameVideo"
            height="100%"
            src="https://www.youtube.com/embed/IHYVSbtvECg?si=siBZjL0e6HScZuir"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
