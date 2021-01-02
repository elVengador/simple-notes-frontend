import { act, renderHook } from "@testing-library/react-hooks";
import useApp from "./useApp";

describe("component::useApp", () => {
  it("show and hide menu", () => {
    const { result } = renderHook(() => useApp());
    expect(result.current.isMenuActive).toBe(false);
    act(() => result.current.showMenu());
    expect(result.current.isMenuActive).toBe(true);
    act(() => result.current.hideMenu());
    expect(result.current.isMenuActive).toBe(false);
  });
});
1;
