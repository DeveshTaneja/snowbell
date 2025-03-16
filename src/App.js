import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";
import "./styles.css";

const BirthdaySurprise = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showSnow, setShowSnow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 2000);
  }, []);

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
      <button className="magic-button" onClick={() => setShowSnow(!showSnow)}>
        {showSnow ? "❄ Stop Snow ❄" : "Click Me for Magic!"}
      </button>
    </div>
  );
};

export default BirthdaySurprise;
