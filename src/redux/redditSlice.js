import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchPosts } from "../api/redditApi";

export const loadPosts = createAsyncThunk('reddit/loadPosts', async (subreddit, {rejectWithValue}) => {
    try {
    const response = await fetchPosts(subreddit);
    return response
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        posts: [], 
        loading: false, 
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadPosts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loadPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.posts = action.payload;
          })
          .addCase(loadPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
    }
});

export default redditSlice.reducer;