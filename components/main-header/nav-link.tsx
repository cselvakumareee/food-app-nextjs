"use client";
import Link from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const active = path.startsWith(href);
  return (
    <Link href={href} className={active ? `${styles.link} ${styles.active}` : styles.link}>
      {children}
    </Link>
  );
}
