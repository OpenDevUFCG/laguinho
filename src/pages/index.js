import Head from 'next/head';
import styles from '@styles/pages/Home.module.css';
import banner from '@assets/laguinho/banner.png';

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
        <img src={banner} alt="Laguinho" />
        <h1 className={styles.title}>Hello World!</h1>
      </main>
    </div>
  );
}
