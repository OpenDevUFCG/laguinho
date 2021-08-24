import Head from 'next/head';
import styles from '@styles/pages/About.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre - Laguinho</title>
        <meta
          name="description"
          content="compartilhar e consumir diferentes tipos de dados, com o objetivo de auxiliar o desenvolvimento de aplicações ou de pesquisas."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>O que é o laguinho</h1>

        <p className={styles.info}>
          O laguinho nasce, acima de tudo, com a intenção de auxiliar a comunidade open source, pesquisadores, alunos, etc no desenvolvimento
          de softwares utilizando dados públicos. Aqui,
          Desenvolvedores e pesquisadores podem utiliza-lo para compartilhar e
          consumir diferentes tipos de dados.
          Este projeto por si só
          também é open source, e pode ser acessado <a href="https://github.com/OpenDevUFCG/laguinho">aqui</a>.
        </p>

        <h4 className={styles.subtitle}>Quem somos:</h4>

        <p className={styles.info}>O laguinho é criado e mantido pela <a href="https://opendevufcg.org/">OpenDevUFCG</a>,
        uma comunidade estudantil voltada a incentivar a cultura open source no curso de Ciência da Computação da UFCG.
        </p>
      </main>
    </div>
  );
}
