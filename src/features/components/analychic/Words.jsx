import { useState } from "react";
import "../../styles/words.css";

const Words = ({ advancedData }) => {
  const { swodishCount, googleCount } = advancedData;

  return (
    <section className="words">
      <div className="words_google">
        <h3>Google:</h3>
        <ul>
          {Object.entries(googleCount).map((entrie) => (
            <li key={Math.random()}>{`${entrie[0]}: ${entrie[1]}`}</li>
          ))}
        </ul>
      </div>
      <div className="words_swodish">
        <h3>Swodish:</h3>
        <ul>
          {Object.entries(swodishCount).map((entrie) => (
            <li key={Math.random()}>{`${entrie[0]}: ${entrie[1]}`}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Words;
