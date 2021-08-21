import { useState } from 'react';
import Link from 'next/link';
import { BiHomeAlt, BiBox, BiBook, BiStar } from 'react-icons/bi';
import styles from '@styles/components/Header.module.css';
import icon from '@assets/laguinho/icon.png';
import SearchBar from './searchBar';

function Header() {
  const [search, setSearch] = useState('');

  return (
    <header className={styles.container}>
      <div className={styles.navigation}>
        <Link href="/">
          <a>
            <BiHomeAlt />
            Início
          </a>
        </Link>
        <Link href="/">
          <a>
            <BiBook />
            Sobre
          </a>
        </Link>
        <Link href="/">
          <a>
            <BiBox />
            Datasets
          </a>
        </Link>
        <a target="_blank" href="https://opendevufcg.org/" rel="noreferrer">
          <BiStar />
          OpenDevUFCG
        </a>
      </div>

      <div className={styles.menu}>
        <div className={styles.brand}>
          <img src={icon} alt="Banner do Laguinho" />
          <h1>Laguinho</h1>
        </div>

        <div className={styles.sideSection}>
          <SearchBar
            placeholder="Pesquisar por datasets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={styles.socialSection}>
            <button type="button">Registrar</button>
            <button type="button">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
