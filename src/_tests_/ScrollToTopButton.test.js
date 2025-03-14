import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ScrollToTopButton from "../components/ScrollToTopButton";

describe("ScrollToTopButton Component", () => {
  it("renders the button when visible and calls scrollToTop on click", () => {
    window.scrollTo = jest.fn();

    render(<ScrollToTopButton />);

    Object.defineProperty(window, "pageYOffset", { value: 400, writable: true });
    fireEvent.scroll(window);

    const button = screen.getByRole("button", { name: "↑" });
    expect(button).toBeVisible();

    fireEvent.click(button);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});

