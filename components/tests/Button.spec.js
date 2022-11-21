import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../button/Button";

test("Button", () => {
  render(<Button>Submit</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveAccessibleName("Submit");
});
