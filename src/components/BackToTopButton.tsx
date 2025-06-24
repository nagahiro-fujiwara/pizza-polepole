"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;
  return (
    <button className={styles.backToTop} onClick={scrollToTop} aria-label="トップへ戻る">
      ↑
    </button>
  );
}
