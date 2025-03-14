const axios = require("axios");

exports.handler = async (event, context) => {

    const { subreddit, sort, postId } = event.queryStringParameters || {};

    let redditUrl = "";

    if(postId) {
        redditUrl = `https://www.reddit.com/comments/${postId}.json`;
    } else if (subreddit) {
        redditUrl = `https://www.reddit.com/r/${subreddit}/${sort || "hot"}.json`;
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Missing required query parameters"}),
        };
    }

    try {
        const response = await axios.get(redditUrl);
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(response.data),
        };
    } catch (error) {
        return {
            statusCode: error.response?.status || 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ error: error.message }),
        };
    }
};