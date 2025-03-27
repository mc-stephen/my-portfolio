"use client";

import { useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState(PortfolioTab.all.valueOf());

  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>

      <ul className={styles.tabs}>
        {Object.keys(portfolio).map((key) => {
          const isActive = selectedTab.valueOf() === key ? styles.active : "";
          return (
            <li
              key={key}
              className={isActive}
              onClick={() => setSelectedTab(key)}
            >
              {key}
            </li>
          );
        })}
      </ul>

      <section className={styles.tabContent}>
        {Object.entries(portfolio).map(([key, value]) => {
          const isAll = key == PortfolioTab.all.valueOf();
          const isSelected = selectedTab.valueOf() === key;
          const projects = isAll ? value : isSelected ? value : [];
          return projects.map((val, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgCont}>
                <Image src={val.image} alt={val.title} fill />
                <div className={styles.frontLayer}>
                  <i className="fa-regular fa-eye"></i>
                </div>
              </div>
              <b className={styles.title}>{val.title}</b>
              <span className={styles.category}>{val.category}</span>
            </div>
          ));
        })}
      </section>
    </div>
  );
}

//======================
//
//======================
enum PortfolioTab {
  all = "All",
  iot = "IoT System",
  web = "Web Development",
  game = "Game Development",
  mobile = "Mobile Application",
  desktop = "Desktop Application",
}

//======================
//
//======================
const portfolio = {
  [PortfolioTab.all]: [],
  [PortfolioTab.web]: [
    {
      url: "",
      title: "AxxellanceBlog",
      category: "Web Development",
      image: "images/project-1.jpg",
    },
    {
      url: "",
      title: "Axxellance",
      category: "Web Development",
      image: "images/project-2.png",
    },
    {
      url: "",
      title: "VideoMax",
      category: "Web Development",
      image: "images/project-3.jpg",
    },
    {
      url: "",
      title: "Portfolio",
      category: "Web Development",
      image: "images/project-4.png",
    },
    {
      url: "",
      title: "Physiolo",
      category: "Web Development",
      image: "images/project-5.png",
    },
    {
      url: "",
      title: "Thevea",
      category: "Web Development",
      image: "images/project-6.png",
    },
  ],
  [PortfolioTab.mobile]: [
    {
      url: "",
      title: "Cashmatrix",
      image: "images/project-1.jpg",
      category: "Mobile Application",
    },
    {
      url: "",
      title: "Grubies",
      image: "images/project-1.jpg",
      category: "Mobile Application",
    },
    {
      url: "",
      title: "Qoresys",
      image: "images/project-1.jpg",
      category: "Mobile Application",
    },
    {
      url: "",
      title: "E-Ticketing",
      image: "images/project-1.jpg",
      category: "Mobile Application",
    },
  ],
  [PortfolioTab.game]: [
    {
      url: "",
      title: "Dead Bird",
      category: "Game Development",
      image: "images/project-1.jpg",
    },
  ],
  [PortfolioTab.desktop]: [
    {
      url: "",
      title: "Cashmatrix Desktop",
      category: "Desktop Application",
      image: "images/project-1.jpg",
    },
    {
      url: "",
      title: "Dev Tools",
      category: "Desktop Application",
      image: "images/project-1.jpg",
    },
  ],
  [PortfolioTab.iot]: [],
};
