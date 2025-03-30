"use client";

import styles from "./style.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h2>Résumé</h2>

      {/*=========================*/}
      {/* EDUCATION */}
      {/*=========================*/}
      <section className={styles.educationSection}>
        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa-solid fa-book" />
          </div>
          <h3>Education</h3>
        </div>
        <ol>
          {education.map((edu, i) => {
            return (
              <li key={i}>
                <h4 className={styles.title}>
                  <span>{edu.school}</span>
                  <span>-</span>
                  <span>{edu.certificate}</span>
                </h4>
                <span className={styles.timeline}>
                  <span>{edu.course}</span>
                  <span>.</span>
                  <span>{edu.timeline}</span>
                </span>
                <p className={styles.desc}>{edu.description.join(" ")}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/*=========================*/}
      {/* EXPERIENCE */}
      {/*=========================*/}
      <section className={styles.experienceSection}>
        <div className={styles.row}>
          <div className={styles.icon}>
            <i className="fa-solid fa-brain" />
          </div>
          <h3>Experience</h3>
        </div>
        <ol>
          {experience.map((exp, i) => {
            return (
              <li key={i}>
                <h4 className={styles.title}>
                  <span>{exp.title}</span>
                  <span>-</span>
                  <span>{exp.occurrence}</span>
                </h4>
                <span className={styles.timeline}>
                  <span>{exp.company}</span>
                  <span>.</span>
                  <span>{exp.timeline}</span>
                </span>
                <p className={styles.desc}>{exp.description.join(" ")}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {/*=======================*/}
      {/* MY SKILLS */}
      {/*=======================*/}
      <section className={styles.skillSection}>
        <h3> My Skills</h3>
        <div>
          {skills.map((skill, i) => {
            return (
              <div key={i} className={styles.skillsItem}>
                <b>
                  <span>{skill.skill}</span>
                  <data value={skill.percentage}>{skill.percentage}%</data>
                </b>
                <div
                  className={styles.range}
                  style={{ ["--range-width" as never]: `${skill.percentage}%` }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

//======================
//
//======================
const skills = [
  {
    percentage: 97,
    skill: "Web Development",
  },
  {
    percentage: 95,
    skill: "Mobile Development",
  },
  {
    percentage: 40,
    skill: "Desktop Development",
  },
  {
    percentage: 20,
    skill: "Game Development",
  },
  {
    percentage: 10,
    skill: "IoT and Embedded System",
  },
];

//======================
//
//======================
const education = [
  {
    certificate: "MSc",
    region: "Lagos, Nigeria",
    timeline: "2025 – Present",
    course: "Computer Engineering",
    school: "Lagos State University",
    description: [
      "Software Development, Data Structures & Algorithms, Cybersecurity",
      "Built a secure mobile banking system prototype using Flutter & Firebase.",
    ],
  },
  {
    certificate: "PGD",
    timeline: "2023 -2024",
    region: "Lagos, Nigeria",
    course: "Computer Engineering",
    school: "Lagos State University",
    description: [
      // change later
      "Software Development, Data Structures & Algorithms, Cybersecurity",
      "Built a secure mobile banking system prototype using Flutter & Firebase.",
    ],
  },
  {
    certificate: "HND",
    timeline: "2018 – 2023",
    region: "Lagos, Nigeria",
    course: "Computer Engineering",
    school: "Moshood Abiola Polytechnic",
    description: [
      "Acquired in-depth knowledge of computer engineering concepts.",
      "Applied theoretical knowledge in practical engineering and software development.",
    ],
  },
];

//======================
//
//======================
const experience = [
  {
    region: "Lagos, Nigeria",
    company: "GGTConnect LTD",
    timeline: "Nov, 2023 – present",
    url: "http://assetmatrixmfb.com",
    occurrence: "Full Time (Hybrid)",
    title: "Flutter Developer Team Lead",
    description: [
      "Implemented best practices for secure authentication & transactions.",
      "Led a team of developers in designing and building a fin-tech applications",
    ],
  },
  {
    region: "Germany",
    url: "https://physiolo.de",
    title: "Next.js Developer",
    company: "Okocha International",
    occurrence: "Part Time (Remote)",
    timeline: "Jun, 2024 – Oct, 2024",
    description: [
      "Single handedly built and developed a physiotherapy web application",
      "Built with Optimization, Responsiveness and SEO in mind",
    ],
  },
  {
    region: "Lagos, Nigeria",
    company: "GGTConnect LTD",
    occurrence: "Full Time (Onsite)",
    url: "https://www.ggtconnect.com",
    title: "Senior Flutter Developer",
    timeline: "Dec, 2022 – Nov, 2023",
    description: [
      "Collaborated with a team of developers to build and optimize fin-tech applications.",
      "Developed and optimized interactive user interfaces from wire-frames and prototypes.",
    ],
  },
  {
    region: "Lagos, Nigeria",
    title: "Flutter Developer",
    url: "https://flexsoftwares.com",
    occurrence: "Full Time (Onsite)",
    timeline: "Jan, 2022 - Dec, 2022",
    company: "Compuclick Software Limited",
    description: [
      "Built and developed an Inventory Mobile Application",
      "Converted the code base from Java to Dart/Flutter",
    ],
  },
  {
    url: "",
    company: "-",
    region: "Germany",
    title: "Web Developer",
    timeline: "6 Months, 2019",
    occurrence: "Freelance (Remote)",
    description: ["Built and developed an Inventory Mobile Application"],
  },
];
