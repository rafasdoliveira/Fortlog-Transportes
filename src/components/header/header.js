import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img
            width="250px"
            height="100%"
            src="/assets/images/logos/logo_fortlog_horizontal.png"
            alt="Logo Horizontal"
          />
        </Link>
      </div>

      <div className={styles.links}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.a} href="/about">
              <strong>Sobre Nós</strong>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} href="/services">
              <strong>Serviços</strong>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} href="/faq">
              <strong>Suporte</strong>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.a} href="/contact">
              <strong>Contato</strong>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
