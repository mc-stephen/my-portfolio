import styles from "./style.module.css";

export default function PaginationComponent({
  setIndex,
  pagination,
  currentIndex,
  setPagination,
}: PaginationComParams) {
  return (
    <ul className={styles.pagination}>
      <li onClick={() => setPagination(-1)}>
        <i className="fa-solid fa-angle-left"></i>
      </li>

      <ul className={styles.numbering}>
        {pagination.map((val, i) => {
          const isActive = currentIndex == i ? styles.active : "";
          return (
            <li key={i} className={isActive} onClick={() => setIndex(i)}>
              {i + 1}
            </li>
          );
        })}
      </ul>

      <li onClick={() => setPagination(+1)}>
        <i className="fa-solid fa-angle-right"></i>
      </li>
    </ul>
  );
}

//=============================
//
//=============================
interface PaginationComParams {
  pagination: number[];
  currentIndex: number;
  setIndex: (index: number) => void;
  setPagination: (index: number) => void;
}
