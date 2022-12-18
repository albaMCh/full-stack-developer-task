import { IJoke } from "../shared/models/Joke";
import Joke from "../components/joke.component";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

function JokeWrapper({ data }: { data: IJoke[] }) {
  const [jokes, setJokes] = useState(data);
  const [joke, setJoke] = useState<IJoke | undefined>(undefined);
  const [showPunchline, setShowPunchline] = useState(false);

  const [clicsNumber, setClicsNumber] = useState(0);

  function loadJoke(jokes: IJoke[]) {
    const randomNumber = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomNumber]);
  }

  useEffect(() => {
    if (clicsNumber % 2 === 0) {
      loadJoke(jokes);
    }

    const handleClickOutside = (event: { target: any }) => {
      const newNumber = clicsNumber + 1;
      setClicsNumber(newNumber);

      if (newNumber % 2 === 0) {
        setShowPunchline(false);
      } else {
        setShowPunchline(true);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [jokes, clicsNumber]);

  if (joke) {
    return (
      <div>
        <p className={styles.infoText}>
          Click anywhere for see the answer and again for next joke.
        </p>
        <Joke data={joke} showPunchline={showPunchline}></Joke>
      </div>
    );
  }

  return <p>Content could not be loaded.</p>;
}

export default JokeWrapper;
