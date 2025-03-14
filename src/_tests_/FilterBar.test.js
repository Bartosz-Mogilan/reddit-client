import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterBar from "../components/FilterBar";

describe("FilterBar Component", () => {
  it("renders three filter buttons", () => {
    const setSelectedFilter = jest.fn();
    render(<FilterBar selectedFilter="hot" setSelectedFilter={setSelectedFilter} />);
    
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(3);
  });

  it("calls setSelectedFilter when a filter is clicked", () => {
    const setSelectedFilter = jest.fn();
    render(<FilterBar selectedFilter="hot" setSelectedFilter={setSelectedFilter} />);
    
    const newButton = screen.getByText("New");
    fireEvent.click(newButton);
    expect(setSelectedFilter).toHaveBeenCalledWith("new");
  });
});



