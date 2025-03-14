import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import PostDetails from "../components/PostDetails";
import { fetchPostDetails } from "../api/redditApi";

// Mock fetchPostDetails
jest.mock("../api/redditApi");

describe("PostDetails Component", () => {
  const fakePost = {
    id: "1",
    title: "Fake Post Title",
    author: "Fake Author",
    score: 100,
    selftext: "This is fake post content.",
  };

  const fakeComments = [
    { id: "c1", author: "Commenter1", body: "Nice post!" },
    { id: "c2", author: "Commenter2", body: "I agree." },
  ];

  beforeEach(() => {
    fetchPostDetails.mockResolvedValue(fakeComments);
  });

  it("renders post details and comments", async () => {
    render(<PostDetails post={fakePost} onBack={() => {}} />);
    
    expect(screen.getByText("Fake Post Title")).toBeInTheDocument();
    expect(screen.getByText(/by Fake Author/i)).toBeInTheDocument();
    expect(screen.getByText(/Score: 100/i)).toBeInTheDocument();
    expect(screen.getByText(/This is fake post content./i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Nice post!")).toBeInTheDocument();
      expect(screen.getByText("I agree.")).toBeInTheDocument();
    });
  });
});


