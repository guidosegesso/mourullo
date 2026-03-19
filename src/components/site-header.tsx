"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./site-header.module.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/quienes-somos", label: "Quienes Somos" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <img src="/logo_mourullo.png" alt="Logo Mourullo" />
          <div>
            <strong>Mourullo</strong>
          </div>
        </Link>

        <nav className={styles.nav}>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? styles.active : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
