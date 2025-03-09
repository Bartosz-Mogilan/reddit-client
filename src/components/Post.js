import React from "react";
import styles from "../css/post.module.css";

function Post({ title, author, score, thumbnail, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            {thumbnail && thumbnail.startWith("http") && (
                <img src={thumbnail} alt="Post thumbnail" className={styles.thumbnail} />
            )}
            <div className={styles.content}>
                <h3 className={styles.postTitle}>{title}</h3>
                <p className={styles.postAuthor}>by {author}</p>
                <p className={styles.postScore}>Score: {score}</p>
            </div>
        </div>
    );
}

export default Post;