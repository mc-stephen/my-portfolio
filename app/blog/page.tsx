"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import PaginationComponent from "../shared/pagination-component";

export default function Blog() {
  const maxShownProjects = 4;
  const directus = "https://directus.axxellance.com";
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const axxellanceblog = "https://axxellanceblog.com/posts";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
  useEffect(() => {
    async function fetchBlogData() {
      const queryParams = new URLSearchParams({
        limit: "12",
        sort: "-date_created",
        "filter[status][_eq]": "published",
        fields: "slug,date_updated,title,description,image,tags",
      });

      try {
        const res = await fetch(
          `${directus}/items/posts?${queryParams.toString()}`,
          { method: "GET" }
        );

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const { data } = await res.json();

        if (data.length > 0) {
          setBlogData(data);
          setIsLoading(false);
          localStorage.setItem("blog_data", JSON.stringify(data));
          setPagination([
            ...Array(Math.ceil(data.length / maxShownProjects)).keys(),
          ]);
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Fetch error:", error);
      }
    }

    setBlogData(JSON.parse(localStorage.getItem("blog_data") ?? "[]"));
    fetchBlogData();
  }, []);

  return (
    <div className={styles.blog}>
      <h2>Blog</h2>

      {/*=====================*/}
      {/*  */}
      {/*=====================*/}
      {
        <section className={styles.blogsSection}>
          {isLoading ? <div className={styles.loader} /> : <></>}
          <div className={styles.blogFlex}>
            {blogData.map((val, i) => {
              const date = new Date(val.date_updated);
              const formattedDate = date.toLocaleDateString("NG", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              });
              const url = `${axxellanceblog}/${val.slug}`;
              const img = `${directus}/assets/${val.image}`;
              const min = maxShownProjects * currentIndex;
              const max = maxShownProjects * (currentIndex + 1);
              if (i >= min && i < max) {
                return (
                  <Link key={i} href={url} target="_blank">
                    <figure>
                      <Image fill loading="lazy" alt={val.title} src={img} />
                    </figure>
                    <div className={styles.blogContent}>
                      <div className={styles.metadata}>
                        <span>{val.tags[0]}</span>
                        <i className="fa-solid fa-circle"></i>
                        <span>{formattedDate}</span>
                      </div>
                      <h3 className={styles.title}>{val.title}</h3>
                      <p className={styles.desc}>{val.description}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </section>
      }

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

//=============================
//
//=============================
interface BlogData {
  slug: string;
  image: string;
  title: string;
  tags: string[];
  description: string;
  ["date_updated"]: string;
}
