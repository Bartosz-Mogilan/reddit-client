import React from "react";
import Post from "./Post";

function PostList ({posts, onPostClick}) {
    return (
        <div>
            {posts.map((post) => (
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
    )
}

export default PostList;