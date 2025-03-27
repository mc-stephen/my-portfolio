"use client";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

import Swiper from "swiper";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./page.module.css";
import { Navigation } from "swiper/modules";

export default function Home() {
  useEffect(() => {
    new Swiper(".swiper", {
      loop: true,
      autoplay: true,
      grabCursor: true,
      spaceBetween: 20,
      slidesPerView: 2,
      modules: [Navigation],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  return (
    <div className={styles.aboutMe}>
      <h2>About Me</h2>
      <Testimonies />

      {/*==================================*/}
      {/*  */}
      {/*==================================*/}
      <section className={styles.info}>
        <p>
          I&apos;m a software engineer and fintech entrepreneur from Nigeria,
          building web and mobile applications that are secure, scalable, and
          user-friendly. I enjoy turning complex ideas into practical and
          efficient software solutions.
        </p>
        <p>
          My job is to develop robust and efficient software that solves
          real-world problems while maintaining simplicity and usability.
          Whether it&apos;s crafting high-performance web applications,
          optimizing fintech platforms, or exploring IoT solutions, I focus on
          delivering practical, scalable, and impactful technology. My goal is
          to push the boundaries of software development while creating tools
          that empower users.
        </p>
      </section>

      {/*==================================*/}
      {/*  */}
      {/*==================================*/}
      <section className={styles.services}>
        <h3>What i&apos;m doing</h3>
        <div className={styles.servicesContainer}>
          {skills.map((skill, i) => {
            return (
              <div key={i}>
                {skill.icon}
                <div className={styles.contentBox}>
                  <h4>{skill.title}</h4>
                  <p className="service-item-text">{skill.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/*==================================*/}
      {/*  */}
      {/*==================================*/}
      <section className={styles.testimonies}>
        <h3>Testimonials</h3>
        <div className="swiper">
          {/* Additional required wrapper */}
          <div className="swiper-wrapper">
            {testimonies.map((testimony, i) => {
              return (
                <div key={i} onClick={() => {}} className="swiper-slide">
                  <div className={styles.avatar}>
                    <Image
                      src={testimony.img}
                      alt="Daniel lewis"
                      width={60}
                      height={60}
                    />
                  </div>
                  <h4>{testimony.name}</h4>
                  <p>{testimony.comment}</p>
                </div>
              );
            })}
          </div>
          {/* If we need navigation buttons */}
          <div className={`swiper-button-prev ${styles.prev}`} />
          <div className={`swiper-button-next ${styles.next}`} />
        </div>
      </section>

      {/*==================================*/}
      {/*  */}
      {/*==================================*/}
      <section className={styles.clients}>
        <h3>Clients</h3>
        <div className={styles.row}>
          {clients.map((client, i) => {
            return (
              <Link href={client.url} key={i} className={styles.link}>
                <Image src={client.image} alt={client.label} fill/>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

//===========================
//
//===========================
function Testimonies() {
  return <div className={styles.testimoniesDialog}></div>;
}

//===========================
//
//===========================
const skills = [
  {
    title: "Web Development",
    icon: <i className="fa-brands fa-react"></i>,
    description:
      "High-quality development of sites at the professional level. ",
  },
  {
    title: "Mobile Development",
    icon: <i className="fa-brands fa-flutter"></i>,
    description:
      "Professional development of applications for iOS and Android. ",
  },
  {
    title: "Game & Desktop Development",
    icon: <i className="fa-solid fa-display"></i>,
    description:
      "Development of desktop applications for Windows, linux and MacOS.",
  },
  {
    icon: <i className="fa-brands fa-rust"></i>,
    title: "IoT and Embedded Systems",
    description: "Development of IoT devices and embedded systems.",
  },
];

//===========================
//
//===========================
const testimonies = [
  {
    img: "images/avatar-1.png",
    name: "Bakare Emmanuel",
    comment:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "date-created": "14 June, 2021",
  },
  {
    img: "images/avatar-2.png",
    name: "Elijah Raphael",
    comment:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "date-created": "14 June, 2021",
  },
  {
    img: "images/avatar-3.png",
    name: "Tochi Juan",
    comment:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "date-created": "14 June, 2021",
  },
  {
    img: "images/avatar-4.png",
    name: "Victor",
    comment:
      "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
    "date-created": "14 June, 2021",
  },
];

//===========================
//
//===========================
const clients = [
  {
    label: "Compuclick Software Limited",
    image: "images/logo-1-color.png",
    url: "",
  },
  {
    label: "AssetMatrix MFB",
    image: "images/logo-2-color.png",
    url: "",
  },
  {
    label: "CashMatrix",
    image: "images/logo-3-color.png",
    url: "",
  },
  {
    label: "Okocha International",
    image: "images/logo-4-color.png",
    url: "",
  },
];
