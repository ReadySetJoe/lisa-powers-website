import Footer from "@/components/Footer";
import styles from "../../styles/Home.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/utils/services";
import { useRouter } from "next/router";

export default function Service() {
  const router = useRouter();
  const { slug } = router.query;
  const service = SERVICES[slug as string];
  if (!service) return null;
  return (
    <>
      <Header showNav={false} />
      <main className={styles.serviceMain}>
        <h2>{service.title}</h2>
        <Image
          src={service.img}
          alt={service.title}
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
          {service.content}
        </p>
        {service.pricing && (
          <p
            style={{ fontWeight: "bold", marginTop: "1rem", color: "#7c5c3b" }}
          >
            Pricing: {service.pricing}
          </p>
        )}
        <p
          style={{
            margin: "1.5rem 0",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          <a href="mailto:lisapowers@example.com" className={styles.button}>
            Contact Lisa about {service.title}
          </a>
        </p>
        <Link href="/">Back to Home</Link>
      </main>
      <Footer />
    </>
  );
}
