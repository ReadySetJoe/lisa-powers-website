import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from "next/image";

interface HeaderProps {
  showNav: boolean;
}

const Header = ({ showNav = true }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo-full-name-taupe-bkgd.png"
          alt="Lisa Powers Family Services"
          width={200}
          height={100}
        />
      </Link>
      {showNav ? (
        <nav>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      ) : (
        <nav>
          <Link href="/">Home</Link>
        </nav>
      )}

      <Image
        src="/images/logo-initials-taupe-bkgd.png"
        alt="logo initials"
        width={100}
        height={100}
        className="hidden md:block"
      />
    </header>
  );
};

export default Header;
