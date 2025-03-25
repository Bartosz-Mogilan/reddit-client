import axios from "axios";

const NETLIFY_PROXY_URL = "/api";

const cache = {};
const CACHE_EXPIRY = 300000;

/** 
* @param {string} subreddit
* @param {string} sort
* @returns {Promise<Array>}
*/

export const fetchPosts = async(subreddit = "reactjs", sort = "hot") => {
    const cacheKey = `${subreddit}_${sort}`;
    const cached = cache[cacheKey]
    if (cached && (Date.now() - cached.timestamp < CACHE_EXPIRY)) {
        return cached.data;
    }

    try {
        const response = await axios.get(NETLIFY_PROXY_URL, {
            params: { subreddit, sort },
        });
        const posts = response.data.data.children.map((item) => item.data);
        cache[cacheKey] = { data: posts, timestamp: Date.now() };
        return posts;
    } catch (error) {
        console.error("Error fetching post", error);
       if (cached) {
        return cached.data;
       }
       if(error.response && error.response.status === 429) {
        throw new Error("Rate limit exceeded. Please wait and try again");
       }
       throw new Error("Could not load posts. Please try again later.");
    }
};

/**
 * @param {string} postId 
 * @returns {Promise<Array>}
 */

export const fetchPostDetails = async (postId) => {
   const cacheKey = `details_${postId}`;
   const cached = cache[cacheKey];
   if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
    return cached.data;
   }

   try {
    const response = await axios.get(NETLIFY_PROXY_URL, {
        params: { postId },
    });

    const detailsArray = response.data[1]?.data?.children || [];
    const postDetails = detailsArray.map((item) => item.data);
    cache[cacheKey] = { data: postDetails, timestamp: Date.now() };
    return postDetails;
   } catch (error) {
    console.error("Error fetching post details", error);
    throw new Error("Could not load post details, Please try again later");
   }
};

