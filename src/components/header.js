import Link from 'next/link';
import styles from '@styles/components/Header.module.css';
import icon from '@assets/laguinho/icon.png';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/">Início</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Datasets</Link>
        <a target="_blank" href="https://opendevufcg.org/" rel="noreferrer">
          OpenDevUFCG
        </a>
      </div>

      <div className={styles.menu}>
        <div>
          <img src={icon} alt="Banner do Laguinho" />
          <h1>Laguinho</h1>
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <button type="button">Registrar</button>
          <button type="button">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
