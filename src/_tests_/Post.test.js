import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Post from "../components/Post";

describe("Post Component", () => {
  const props = {
    title: "Test Post Title",
    author: "Test Author",
    score: 42,
    thumbnail: "http://example.com/test.jpg",
    onClick: jest.fn(),
    featured: false,
  };

  it("renders post title, author, and score", () => {
    render(<Post {...props} />);
    expect(screen.getByText("Test Post Title")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("renders the thumbnail image if provided", () => {
    render(<Post {...props} />);
    const image = screen.getByAltText("Post thumbnail");
    expect(image).toHaveAttribute("src", props.thumbnail);
  });

  it("calls onClick when the post card is clicked", () => {
    render(<Post {...props} />);
    const card = screen.getByText("Test Post Title").closest("div");
    fireEvent.click(card);
    expect(props.onClick).toHaveBeenCalled();
  });
});
