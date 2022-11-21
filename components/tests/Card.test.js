import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "../card/Card.js";

describe("Card component", () => {
  it("should render children", () => {
    const text = "Click me";
    render(<Card>{text}</Card>);
    const card = screen.getByText(text);
    expect(card).toBeInTheDocument();
  });

  it("should allow clicks", async () => {
    const handleClick = jest.fn();
    const text = "Click me";
    render(<Card onClick={handleClick}>{text}</Card>);
    const card = screen.getByText(text);
    await userEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
