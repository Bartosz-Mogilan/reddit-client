import React from "react";
import Post from "./Post";
import styles from "../css/postList.module.css";

function PostList ({ posts, onPostClick }) {
    if(!posts.length) return <p>No Posts found.</p>;

    const [featuredPost, ...otherPosts] = posts;

    return (
        <div className={styles.postList}>
            <Post
            key={featuredPost.id}
            title={featuredPost.title}
            author={featuredPost.author}
            score={featuredPost.score}
            thumbnail={featuredPost.thumbnail}
            onClick={() => onPostClick(featuredPost.id)}
            featured
            />

            {otherPosts.map((post) => (
                <Post
                key={post.id}
                title={post.title}
                author={post.author}
                score={post.score}
                thumbnail={post.thumbnail}
                onClick={() => onPostClick(post.id)}
                />
            ))}
        </div>
    );
}

export default PostList;

