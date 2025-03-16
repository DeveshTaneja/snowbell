import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import "./styles.css";
import birthdaySong from "./birthday-song.mp3"; // Ensure this file is in your src folder

const BirthdaySurprise = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showSnow, setShowSnow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(birthdaySong));

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 2000);
  }, []);

  const handleButtonClick = () => {
    setShowSnow(!showSnow);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Restart the song when played again
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      {showSnow && <Snowfall snowflakeCount={80} />}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="title"
      >
        Happy Birthday, Snowbell! 🎉
      </motion.h1>
      {showMessage && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="message"
        >
          Wishing you a day filled with love, joy, and endless surprises! 💖
        </motion.p>
      )}
      <button className="magic-button" onClick={handleButtonClick}>
        {showSnow ? "❄ Stop Magic ❄" : "Click Me for Magic!"}
      </button>
    </div>
  );
};

export default BirthdaySurprise;
