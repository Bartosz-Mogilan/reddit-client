import axios from "axios";

const REDDIT_BASE_URL = 'https://www.reddit.com';
const cache = {};
let lastFetchTimestamp = null;
const CACHE_EXPIRTY = 300000;

export const fetchPosts = async(subreddit = "reactjs") => {
    if (cache[subreddit] && lastFetchTimestamp && (Date.now()- lastFetchTimestamp < CACHE_EXPIRTY)) 
        return cache[subreddit];

    try {
        const response = await axios.get(`${REDDIT_BASE_URL}/r/${subreddit}.json`);
        const posts = response.data.data.children.map((post) => post.data);
        cache[subreddit] = posts;
        lastFetchTimestamp = Date.now();
        return posts;
    } catch (error) {
        console.error("Error fetching post", error);
        if(cache[subreddit]) {
            return cache[subreddit];
        }
        throw new Error ("Could not load posts. Please try again later");
    }
};

export const fetchPostDetails = async (postId) => {
    if (cache[postId]) return cache[postId];

    try {
        const response = await axios.get(`${REDDIT_BASE_URL}/comments/${postId}.json`);
        const postDetails = response.data[0].data.children.map((comment) => comment.data);
        cache[postId] = postDetails;
        return postDetails;
    } catch (error) {
        console.error("Error fetching post details", error);
        throw new Error("Could not load post details. Please try again later");
    }
};

