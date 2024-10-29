import React from "react";
import styles from "../css/post.module.css";

function Post ({title, author, score, thumbnail, onClick}) {
    return (
        <div className={styles.card} onClick={onClick}>
            {thumbnail && <img src ={thumbnail} alt="Post thumbnail" className={styles.thumbnail} />}
            <h3>{title}</h3>
            <p>by {author}</p>
            <p> Score: {score}</p>
        </div>
    )
}

export default Post;