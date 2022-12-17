import Head from "next/head";
import styles from "../styles/Home.module.css";

import JokeWrapper from "../components/jokeWrapper.component";
import { getJokes } from "../shared/middleware/jokes.middleware";
import { IJoke } from "../shared/models/Joke";

export default function Home({ jokes }: { jokes: IJoke[] }) {
  return (
    <>
      <Head>
        <title>Full Stack Developer Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <JokeWrapper data={jokes}></JokeWrapper>
        <div className={styles.footer}>Developed by Alba Molera Chacón</div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await getJokes();

  return {
    props: {
      jokes: response.data,
    },
  };
}
