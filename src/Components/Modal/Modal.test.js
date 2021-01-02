import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import useApp from "../../useApp";
import Modal from "./Modal";

describe("component::Modal", () => {
  it("render component", () => {
    const { getByTestId } = render(<Modal testId={"id-modal"} />);
    expect(getByTestId("id-modal")).toBeInTheDocument();
    expect(getByTestId("id-modal").style.display === "none").toBe(true);
  });
  it("enable and disable modal", () => {
    const { result } = renderHook(() => useApp());
    // enable
    act(() => result.current.showMenu());
    const { getByTestId, rerender } = render(
      <Modal testId={"id-modal"} isMenuActive={result.current.isMenuActive} />
    );
    expect(getByTestId("id-modal").style.display === "flex").toBe(true);

    //disable
    act(() => result.current.hideMenu());
    rerender(
      <Modal testId={"id-modal"} isMenuActive={result.current.isMenuActive} />
    );
    expect(getByTestId("id-modal").style.display === "none").toBe(true);
  });
});
