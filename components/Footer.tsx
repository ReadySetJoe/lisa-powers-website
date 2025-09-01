import Image from "next/image";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/logo-initials-filled-bkgd.png"
        alt="logo initials"
        width={100}
        height={100}
      />
      <p>
        &copy; 2025 Lisa Powers Family Services – Caring for Families with Heart
      </p>
    </footer>
  );
};

export default Footer;
