import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SERVICES } from "@/utils/services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lisa Powers Family Services</title>
        <meta
          name="description"
          content="Friendly services for families in our community, by Lisa Powers."
        />
      </Head>

      <Header showNav={true} />

      <section className={styles.hero}>
        <div>
          <h2>Here to make life easier</h2>
          <p style={{ maxWidth: "360px" }}>
            From pet sitting and photo archiving to meal help and carpools, I’m
            here to lend a hand with the things that matter most to your family.
          </p>
        </div>
        <Image
          src="/images/lisa-beach.jpg"
          alt="Hero Image"
          width={360}
          height={400}
          style={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
          className="md:ml-4"
        />
      </section>

      <section id="services" className={styles.services}>
        {Object.keys(SERVICES).map((key, idx) => {
          const service = SERVICES[key];
          return (
            <Link
              key={idx}
              href={`/services/${key}`}
              className={styles.service}
            >
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          );
        })}
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Get in Touch</h2>
        <p>
          Email:{" "}
          <a href="mailto:lisapowers@example.com">lisapowers@example.com</a>
        </p>
        <p>Phone: (555) 123-4567</p>
      </section>

      <Footer />
    </>
  );
}
