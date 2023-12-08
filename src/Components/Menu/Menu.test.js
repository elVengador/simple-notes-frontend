import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import useApp from "../../useModal";
import Menu from "./Menu";

jest.mock('../../constants', () => ({
  VITE_URI: '',
}));

describe("component::Menu", () => {
  it("render component", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Menu testId={"id-menu"} />
      </BrowserRouter>
    );
    expect(getByTestId("id-menu")).toBeInTheDocument();
  });
});
