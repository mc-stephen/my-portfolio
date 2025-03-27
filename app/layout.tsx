"use client";

import "./globals.css";
import Link from "next/link";
// import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
});

// export const metadata: Metadata = {
//   title: "mc-stephen",
//   description: "mc-stephen's personal website",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const asideRef = useRef<HTMLElement>(null);
  const [mainMinHeight, setMainMinHeight] = useState("0px");

  useEffect(() => {
    if (asideRef.current != null) {
      setMainMinHeight(asideRef.current.clientHeight + "px");
    }
  }, [setMainMinHeight]);

  return (
    <html lang="en">
      <body className={poppins.variable}>
        {/*-----------------------------------*/}
        {/* #ASIDE */}
        {/*-----------------------------------*/}
        <aside ref={asideRef}>
          <div className="profile">
            <figure> 
              <Image
                width={80}
                height={80}
                alt="Chukwuemeka Michael"
                src="/images/my-avatar.png"
              />
            </figure>

            <div className="info-content">
              <h1 title="Chukwuemeka Michael">Stephen Michael C.</h1>
              <span className="title">Mobile / Web Developer</span>
            </div>

            <button>Show Contacts</button>
          </div>

          <hr />

          <ul className="contacts">
            {contacts.map((contact, i) => (
              <li className="contact-item" key={i}>
                <div className="icon-box">{contact.icon}</div>
                <div className="contact-info">
                  <span>{contact.label}</span>
                  {contact.value}
                </div>
              </li>
            ))}
          </ul>

          <hr />

          <ul className="socials">
            {socials.map((social, i) => (
              <li className="social-item" key={i}>
                <a
                  target="_blank"
                  className="social-link"
                  href={social.url}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/*-----------------------------------*/}
        {/* #MAIN */}
        {/*-----------------------------------*/}
        <main
          style={{ "--main-min-height": mainMinHeight } as React.CSSProperties}
        >
          <nav>
            {navItems.map((navItem, i) => {
              const activeClass = pathname == navItem.url ? "active" : "";
              return (
                <Link
                  key={i}
                  href={navItem.url}
                  className={`link ${activeClass}`}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </nav>
          {children}
        </main>
        <Script
          src="https://kit.fontawesome.com/7b9eb9d529.js"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}

//===========================
//
//===========================
const navItems = [
  {
    label: "About",
    url: "/",
  },
  {
    label: "Résumé",
    url: "/resume",
  },
  {
    label: "Portfolio",
    url: "/portfolio",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

//===========================
//
//===========================
const socials = [
  {
    label: "Blog",
    icon: <i className="fa-solid fa-rss"></i>,
    url: "https://axxellanceblog.com",
  },
  {
    label: "Linkedin",
    icon: <i className="fa-brands fa-linkedin-in"></i>,
    url: "https://linkedin.com/in/mc-stephen",
  },
  {
    label: "GitHub",
    icon: <i className="fa-brands fa-github-alt"></i>,
    url: "https://github.com/mc-stephen",
  },
];

//===========================
//
//===========================
const contacts = [
  {
    label: "Email",
    icon: <i className="fa-regular fa-envelope"></i>,
    value: <a href="mailto:hi@mc-stephen.dev">hi@mc-stephen.dev</a>,
  },
  {
    label: "Phone",
    icon: <i className="fa-solid fa-mobile-screen"></i>,
    value: <a href="tel:+2349026560079">+234 902 656 0079</a>,
  },
  {
    label: "Birthday",
    icon: <i className="fa-regular fa-calendar-days"></i>,
    value: <time dateTime="2001-01-24">Jan 24, 2001</time>,
  },
  {
    label: "Location",
    icon: <i className="fa-solid fa-location-dot"></i>,
    value: <address>Ikeja, Lagos, Nigeria</address>,
  },
];
