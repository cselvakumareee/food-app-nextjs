import Link from "next/link";
import logoImg from "../../assets/logo.png";
import styles from './main-header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logoImg.src} alt="Logo" className="h-8 w-auto" />
      </Link>
      <nav className={styles.nav}>
        <ul className="flex space-x-4 p-4">
          <li><Link href="/meals">Browse meals</Link></li>
          <li><Link href="/community">Foodies community</Link></li>
        </ul>
      </nav>
    </header>
  );
}