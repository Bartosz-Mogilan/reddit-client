import React, { useState, useEffect } from "react";
import styles from "../css/scrollToTopButton.module.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
    data-cy="scroll-to-top"
      className={styles.scrollButton}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;