import styles from './App.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './redux/redditSlice';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';

function App() {
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { posts, loading, error } = useSelector((state) => state.reddit);

  useEffect(() => {
    dispatch(loadPosts('reactjs'));
  }, [dispatch]);

  const handlePostClick = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading && <p>Loading posts...</p>}
      {error && <p>{error}</p>}
      {selectedPost ? (
        <PostDetails post={selectedPost} />
      ) : (
        <PostList posts={filteredPosts} onPostClick={handlePostClick} />
      )}
    </div>
  );
}

export default App;
