import React from "react";
import { render, screen } from "@testing-library/react";
import PostList from "../components/PostList";

describe("PostList Component", () => {
  const fakePosts = [
    { id: "1", title: "Featured Post", author: "Author1", score: 100, thumbnail: "http://example.com/1.jpg" },
    { id: "2", title: "Post Two", author: "Author2", score: 50, thumbnail: "http://example.com/2.jpg" },
    { id: "3", title: "Post Three", author: "Author3", score: 25, thumbnail: "http://example.com/3.jpg" },
  ];

  it("renders featured post and other posts", () => {
    const mockOnPostClick = jest.fn();
    render(<PostList posts={fakePosts} onPostClick={mockOnPostClick} />);
    
    expect(screen.getByText("Featured Post")).toBeInTheDocument();
    expect(screen.getByText("Post Two")).toBeInTheDocument();
    expect(screen.getByText("Post Three")).toBeInTheDocument();
  });
});

