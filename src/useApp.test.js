import { act, renderHook } from "@testing-library/react-hooks";
import useApp from "./useModal";

describe("component::useApp", () => {
  it("show and hide menu", () => {
    const { result } = renderHook(() => useApp());
    expect(result.current.isActive).toBe(false);
    act(() => result.current.show());
    expect(result.current.isActive).toBe(true);
    act(() => result.current.hide());
    expect(result.current.isActive).toBe(false);
  });
});
1;
