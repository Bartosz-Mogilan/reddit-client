import axios from "axios";

const REDDIT_BASE_URL = 'https://www.reddit.com';
const cache = {};
const CACHE_EXPIRY = 300000;

export const fetchPosts = async(subreddit = "reactjs", sort = "hot") => {
    const cacheKey = `${subreddit}_${sort}`;
    const cached = cache[cacheKey]
    if (cached && (Date.now() - cached.timestap < CACHE_EXPIRY)) {
        return cached.data;
    }

    try {
        const response = await axios.get(`${REDDIT_BASE_URL}/r/${subreddit}.json`);
        const posts = response.data.data.children.map((post) => post.data);
        cache[cacheKey] = { data: posts, timestamp: Date.now() };
        return posts;
    } catch (error) {
        console.error("Error fetching post", error);
       if (cached) {
        return cached.data;
       }
       if(error.response && error.response.status === 429) {
        throw new Error("Rate limited exceeded. Please wait and try again");
       }
       throw new Error("Could not load posts. Please try again later.");
    }
};

export const fetchPostDetails = async (postId) => {
   const cacheKey = `details_${postId}`;
   if (cache[cacheKey]) return cache[cacheKey].data;

   try {
    const response = await axios.get(`${REDDIT_BASE_URL}/comments/${postId}.json`);
    const postDetails = response.data[0].data.children.map((comment) => comment.data);
    cache[cacheKey] = { data: postDetails, timestamp: Date.now() };
    return postDetails;
   } catch (error) {
    console.error("Error fetching post details", error);
    throw new Error("Could not load post details, Please try again later");
   }
};

