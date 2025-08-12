import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./HeaderTop.module.sass";

export default function HeaderTop() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.container}>
        <a
          href="https://www.google.com/maps?q=-10.6861429,-37.4258917"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.locationLink}
        >
          <FaMapMarkerAlt className={styles.icon} />
          Localização
        </a>
      </div>
    </header>
  );
}
