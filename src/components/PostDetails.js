import React from "react";
import styles from "../css/postDetails.module.css";

function PostDetails ({ post }) {
    if(!post) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
            <p>{post.score}</p>
            <div>{post.content}</div>
        </div>
    )
}

export default PostDetails;