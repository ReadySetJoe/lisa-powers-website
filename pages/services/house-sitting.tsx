import Footer from "@/components/Footer";
import styles from "../../styles/Home.module.css";
import Header from "@/components/Header";
import Image from "next/image";

export default function HouseSitting() {
  return (
    <>
      <Header showNav={false} />
      <main className={styles.heroColumn}>
        <h2>House Sitting</h2>
        <Image
          src="/images/house-sitting.jpg"
          alt="House Sitting"
          width={800}
          height={300}
          style={{ borderRadius: "8px", marginTop: "1rem" }}
        />
        <p
          style={{
            marginTop: "1.5rem",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          I’ll care for your home while you’re away — checking mail, watering
          plants, and making sure everything is safe and secure. You can travel
          with peace of mind knowing your house is in good hands.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <a href="mailto:lisapowers@example.com" className={styles.button}>
            Contact Lisa about House Sitting
          </a>
        </p>
      </main>

      <Footer />
    </>
  );
}
