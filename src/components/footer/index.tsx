import styles from "./style.module.sass";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Jhônatas Lima - Advocacia Especializada</h2>
        </div>

        <div className={styles.social}>
          <Link href="https://facebook.com" target="_blank">Facebook</Link>
          <Link href="https://instagram.com" target="_blank">Instagram</Link>
          <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Jhônatas Lima - Advocacia Especializada. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
