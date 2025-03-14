import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import styles from "../css/post.module.css";

function Post({ title, author, score, thumbnail, onClick, featured = false }) {
    return (
       <div
       className={featured ? styles.featuredCard : styles.card}
       onClick={onClick}
       >
        <div className={styles.voteSection}>
            <FaArrowUp className={styles.arrow} />
            <span className={styles.voteScore}>{score}</span>
            <FaArrowDown className={styles.arrow} />
        </div>

        <div className={styles.postContent}>
            {thumbnail &&
            typeof thumbnail === "string" &&
            thumbnail.startsWith("http") && (
                <img
                src={thumbnail}
                alt="Post thumbnail"
                className={styles.thumbnail}
                />
            )}

            <h3 className={styles.postTitle}>{title}</h3>
            <p className={styles.postAuthor}>{author}</p>
        </div>
       </div>
    );
}

export default Post;