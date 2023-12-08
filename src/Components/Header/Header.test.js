import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import useApp from "../../useModal";
import Header from "./Header";

describe("component::Header", () => {
  it("render component", () => {
    const { getByTestId } = render(<Header testId={"id-header"} />);
    expect(getByTestId("id-header")).toBeInTheDocument();
  });
  it("enable menu", () => {
    const { result } = renderHook(() => useApp());
    const { getByTestId } = render(
      <Header testId={"id-header"} showMenu={result.current.show} />
    );
    expect(result.current.isActive).toBe(false);
    act(() => {
      userEvent.click(getByTestId("id-icon-menu"));
    });

    expect(result.current.isActive).toBe(true);
  });
});
