"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useRef, useState } from "react";

export default function Portfolio() {
  const maxShownProjects = 6;
  const paginationLength = useRef(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [projects, setProjects] = useState<Record<string, string>[]>([]);
  const [selectedTab, setSelectedTab] = useState(PortfolioTab.all.valueOf());

  function pagination(index: number) {
    const nxtPageIndex = currentIndex + index;
    console.log(nxtPageIndex);

    if (nxtPageIndex >= 0 && nxtPageIndex < projects.length) {
      setCurrentIndex(currentIndex + index);
    }
  }

  useEffect(() => {
    const allIsSelected = selectedTab === PortfolioTab.all;
    const values = allIsSelected
      ? Object.values(portfolio).flat() // Flatten all projects if "All" is selected
      : portfolio[selectedTab] || []; // Get selected category

    setProjects(values);
  }, [selectedTab]);

  return (
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>

      {/*==================*/}
      {/*  */}
      {/*==================*/}
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

      {/*==================*/}
      {/*  */}
      {/*==================*/}
      <section className={styles.tabContent}>
        {projects.map((val, i) => {
          const min = maxShownProjects * currentIndex;
          const max = maxShownProjects * (currentIndex + 1);
          if (i >= min && i < max) {
            return (
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
            );
          }
        })}
      </section>

      {/*==================*/}
      {/*  */}
      {/*==================*/}
      {}
      <ul className={styles.pagination}>
        <li onClick={() => pagination(-1)}>
          <i className="fa-solid fa-angle-left"></i>
        </li>

        <ul className={styles.numbering}>
          {new Array(paginationLength.current).fill(0).map((val, i) => {
            // const pagination = (projects.length / maxShownProjects).toFixed();
            return (
              <li key={i} onClick={() => setCurrentIndex(i + 1)}>
                {i + 1}
              </li>
            );
          })}
        </ul>

        <li onClick={() => pagination(+1)}>
          <i className="fa-solid fa-angle-right"></i>
        </li>
      </ul>
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
const portfolio: Record<string, Record<string, string>[]> = {
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
