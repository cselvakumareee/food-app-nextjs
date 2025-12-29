import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function Header() {
  console.log("excute");
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="Logo" priority className="h-8 w-auto" />
        </Link>
        <nav className={styles.nav}>
          <ul className="flex space-x-4 p-4">
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
