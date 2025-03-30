"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import PaginationComponent from "../shared/pagination-component/pagination-component";

export default function Portfolio() {
  const maxShownProjects = 6;
  const [pagination, setPagination] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [projects, setProjects] = useState<Record<string, string>[]>([]);
  const [selectedTab, setSelectedTab] = useState(PortfolioTab.all.valueOf());

  //=============================
  //
  //=============================
  function setPaginationIndex(index: number) {
    const nxtPageIndex = currentIndex + index;
    if (nxtPageIndex >= 0 && nxtPageIndex < pagination.length) {
      setCurrentIndex(currentIndex + index);
    }
  }

  //=============================
  //
  //=============================
  function openLink(link: string) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  //=============================
  //
  //=============================
  useEffect(() => {
    const values =
      selectedTab === PortfolioTab.all
        ? Object.values(portfolio).flat() // Flatten all projects if "All" is selected
        : portfolio[selectedTab] || []; // Get selected category

    const total = Math.ceil(values.length / maxShownProjects);
    setPagination([...Array(total).keys()]);
    setProjects(values);
  }, [selectedTab]);

  //=============================
  //
  //=============================
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
              <div
                key={i}
                className={styles.card}
                onClick={() => openLink(val.url)}
              >
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
      <PaginationComponent
        pagination={pagination}
        currentIndex={currentIndex}
        setIndex={(v) => setCurrentIndex(v)}
        setPagination={(i) => setPaginationIndex(i)}
      />
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
