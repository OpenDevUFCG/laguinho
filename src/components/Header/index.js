import Link from 'next/link';
import styles from '@styles/components/Header.module.css';
import banner from '@assets/laguinho/banner.png';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/">Início</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Datasets</Link>
        <Link passHref href="/">
          OpenDevUFCG
        </Link>
      </div>

      <div className={styles.menu}>
        <img src={banner} alt="Banner do Laguinho" />

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
