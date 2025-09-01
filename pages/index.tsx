import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      title: "House Sitting",
      desc: "Reliable care for your home when you’re away.",
      img: "/images/house-sitting.jpg",
      slug: "house-sitting",
    },
    {
      title: "Pet Sitting",
      desc: "Compassionate attention for your furry family members.",
      img: "/images/pet-sitting.jpg",
      slug: "pet-sitting",
    },
    {
      title: "Photo Archiving",
      desc: "Organize and preserve precious family memories.",
      img: "/images/photo-archiving.jpg",
      slug: "photo-archiving",
    },
    {
      title: "Bracelet Making",
      desc: "Custom, handmade bracelets crafted with care.",
      img: "/images/bracelet-making.jpg",
      slug: "bracelet-making",
    },
    {
      title: "Monogramming",
      desc: "Personalized monogrammed gifts and keepsakes.",
      img: "/images/monogramming.jpg",
      slug: "monogramming",
    },
    {
      title: "Weekday Meal Help",
      desc: "Support with shopping, prepping, and family meals.",
      img: "/images/weekday-meal-help.jpg",
      slug: "weekday-meal-help",
    },
    {
      title: "Car Pool Help",
      desc: "Dependable transportation support for busy families.",
      img: "/images/car-pool-help.jpg",
      slug: "car-pool-help",
    },
  ];

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
            marginLeft: "20px",
            borderRadius: "10px",
          }}
        />
      </section>

      <section id="services" className={styles.services}>
        {services.map((service, idx) => (
          <Link
            key={idx}
            href={`/services/${service.slug}`}
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
        ))}
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
