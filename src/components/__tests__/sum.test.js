import { render, screen } from "@testing-library/react";
import { sum } from "../sum";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("doing unit testing", () => {
  test("first test case sum", () => {
    const result = sum(3, 3);
    expect(result).toBe(6);
  });

  test("should have heading present in Contact", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //console.log(heading)
    expect(heading).toBeInTheDocument();
  });
});
