import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("component::Footer", () => {
  it("render component", () => {
    const { getByTestId } = render(<Footer testId={"id-footer"} />);
    expect(getByTestId("id-footer")).toBeInTheDocument();
  });
});
