import { getByText, render } from "@testing-library/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import useApp from "../../useApp";
import Menu from "./Menu";

describe("component::Menu", () => {
  it("render component", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Menu testId={"id-menu"} />
      </BrowserRouter>
    );
    expect(getByTestId("id-menu")).toBeInTheDocument();
  });
  it("disable menu", () => {
    const { result } = renderHook(() => useApp());
    act(() => result.current.showMenu());
    const { getByTestId } = render(
      <BrowserRouter>
        <Menu testId={"id-menu"} hideMenu={result.current.hideMenu} />
      </BrowserRouter>
    );
    act(() => userEvent.click(getByTestId("id-close")));
    expect(result.current.isMenuActive).toBe(false);
  });
});
