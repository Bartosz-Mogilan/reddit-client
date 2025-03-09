import React from "react";
import styles from "../css/postDetails.module.css";

function PostDetails ({ post, onBack }) {
  if(!post) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
        <button onClick={onBack} className={styles.backButton}>Back</button>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.author}>by {post.author}</p>
        <p className={styles.score}>Score: {post.score}</p>
        <div className={styles.content}>
            {post.selftext ? post.selftext : "No additional content."}
        </div>
    </div>
  );
}

export default PostDetails;