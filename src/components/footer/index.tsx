import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.sass";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h2>Jhônatas Lima - Advocacia Especializada</h2>
          </div>

          <div className={styles.social}>
            <Link
              href="https://www.instagram.com/jhonataslima.adv?igsh=MThjbHE2Z3BkNHc1eQ=="
              target="_blank"
              className={styles.socialLink}
            >
              <FaInstagram className={styles.icon} />
              Instagram
            </Link>

            <a
              href="https://wa.me/5579996284351"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaWhatsapp className={styles.icon} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Jhônatas Lima - Advocacia
            Especializada. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <div className={styles.developedBy}>
        Desenvolvido por{" "}
        <a
          href="https://www.instagram.com/marcos_sillva__?igsh=MXI1ZjZwYWk3bHk3cA%3D%3D&utm_source=qr"
          target="_blank"
        >
          Marcos M.
        </a>
      </div>
    </>
  );
}
