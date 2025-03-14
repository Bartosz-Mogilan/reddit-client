import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders the title and search input", () => {
    const setSearchQuery = jest.fn();
    render(<Header searchQuery="test" setSearchQuery={setSearchQuery} />);
    
    expect(screen.getByText("My Reddit App")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search posts...")).toBeInTheDocument();
  });

  it("calls setSearchQuery on input change", () => {
    const setSearchQuery = jest.fn();
    render(<Header searchQuery="" setSearchQuery={setSearchQuery} />);
    
    const input = screen.getByPlaceholderText("Search posts...");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(setSearchQuery).toHaveBeenCalledWith("hello");
  });
});


