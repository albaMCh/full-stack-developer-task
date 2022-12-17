import { IJoke } from "../shared/models/Joke";

function Joke({
  data: joke,
  showPunchline,
}: {
  data: IJoke;
  showPunchline: boolean;
}) {
  return (
    <div>
      <p>{joke.setup}</p>

      {showPunchline && <p>{joke.punchline}</p>}
    </div>
  );
}

export default Joke;
