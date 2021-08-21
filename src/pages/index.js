import Head from 'next/head';
import styles from '@styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Laguinho</title>
        <meta
          name="description"
          content="compartilhar e consumir diferentes tipos de dados, com o objetivo de auxiliar o desenvolvimento de aplicações ou de pesquisas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello World!</h1>
      </main>
    </div>
  );
}
