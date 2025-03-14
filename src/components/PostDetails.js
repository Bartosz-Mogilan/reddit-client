import React, { useEffect, useState } from "react";
import styles from "../css/postDetails.module.css";
import ReactMarkdown from "react-markdown";
import { fetchPostDetails } from "../api/redditApi";

function PostDetails ({ post, onBack }) {
  
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [commentError, setCommentError] = useState(null); 

  useEffect(() => {
    const getComments = async () => {
      setLoadingComments(true);
      
      try {
        const commentsData = await fetchPostDetails(post.id);
        setComments(commentsData);
      } catch (error) {
        setCommentError(error.message);
      }
      setLoadingComments(false);
    };

    if (post && post.id) {
      getComments();
    }
  }, [post]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
        <button onClick={onBack} className={styles.backButton}> ←Back</button>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.author}>by {post.author}</p>
        <p className={styles.score}>Score: {post.score}</p>

        <div className={styles.content}>
            <ReactMarkdown>{post.selftext || "No additional content."}</ReactMarkdown>
        </div>

        <hr className={styles.divider} />
        <h3 className={styles.commentsTitle}>Comments</h3>
        {loadingComments && <p>Loading commnets....</p>}
        {commentError && <p className={styles.errorMessage}>{commentError}</p>}
        <div className={styles.comments}>
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className={styles.comment}>
                <p className={styles.commentAuthor}>by {comment.author}</p>
                <ReactMarkdown>{comment.body}</ReactMarkdown>
                </div>
            ))
          ) : (
            <p>No comments found.</p>
          )}
        </div>
    </div>
  );
}

export default PostDetails;