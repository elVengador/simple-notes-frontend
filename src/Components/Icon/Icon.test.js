import { render } from "@testing-library/react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";

describe("component::Icon", () => {
  it("render component", () => {
    const { getByTestId } = render(<Icon testId={"id-icon"} icon={faBars} />);
    expect(getByTestId("id-icon")).toHaveClass("icon-dark");
    expect(getByTestId("id-icon")).toBeInTheDocument();
  });
});
