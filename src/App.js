import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from './redux/redditSlice';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import ScrollToTopButton from './components/ScrollToTopButton';
import styles from './App.css';

function App() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.reddit);

  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("hot");

  const subreddit = "reactjs";

  useEffect(() => {
    dispatch(loadPosts({ subreddit, sort: selectedFilter }));
  }, [dispatch, subreddit, selectedFilter]);

  const handlePostClick = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterBar selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />

      {loading && <p className={styles.loading}>Loading posts...</p>}

      {error && (
        <div className={styles.errorContainer}>
          <p className={styles.errorMessage}>{error}</p>
          <button
          onClick={() => dispatch(loadPosts({ subreddit, sort: selectedFilter }))}
          className={styles.retryButton}
          > 
          Retry
          </button>
        </div>
      )}
      
      {selectedPost ? (
        <PostDetails post={selectedPost} onBack={handleBack} />
      ) : (
        <PostList posts={filteredPosts} onPostClick={handlePostClick} />
      )}
      <ScrollToTopButton />
    </div>   
  );
}

export default App;
