import styles from "./style.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <h2>Résumé</h2>

      {/*=========================*/}
      {/* EDUCATION & EXPERIENCE */}
      {/*=========================*/}
      <section className={styles.eduExpSection}>
        <div className={styles.education}>
          <div className={styles.row}>
            <i className="fa-solid fa-book"></i>
            <b>Education</b>
          </div>
          {education.map((edu, i) => {
            return <div key={i}></div>;
          })}
        </div>
        {/*====================*/}
        <div className={styles.education}>
          <div className={styles.row}>
            <i className="fa-solid fa-brain"></i>
            <b>Experience</b>
          </div>
          {experience.map((exp, i) => {
            return <div key={i}></div>;
          })}
        </div>
      </section>

      {/*=======================*/}
      {/* MY SKILLS */}
      {/*=======================*/}
      <section className={styles.skillSection}>
        <h3> My Skills</h3>
        <div>
          {skills.map((skill, i) => {
            return <div key={i}></div>;
          })}
        </div>
      </section>
    </div>
  );
}

//======================
//
//======================
const skills = [{}];

//======================
//
//======================
const education = [{}];

//======================
//
//======================
const experience = [{}];
