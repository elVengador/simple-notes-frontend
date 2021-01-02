import { render } from "@testing-library/react";
import Link from "./Link";

describe("component::Link", () => {
  it("render component", () => {
    const { getByTestId, getByText } = render(
      <Link testId={"id-link"} text={"homepage"} />
    );
    expect(getByText("homepage")).toBeInTheDocument();
    expect(getByTestId("id-link")).toBeInTheDocument();
  });
});
