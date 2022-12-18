import { IJoke } from "../shared/models/Joke";
import styles from "../styles/Home.module.css";

function Joke({
  data: joke,
  showPunchline,
}: {
  data: IJoke;
  showPunchline: boolean;
}) {
  return (
    <div className={styles.jokeCard}>
      <p className={styles.setupText}>{joke.setup}</p>

      {showPunchline && (
        <p className={styles.punchlineText}>{joke.punchline}</p>
      )}
    </div>
  );
}

export default Joke;
