import { render } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import useApp from "../../useModal";
import Modal from "./Modal";

describe("component::Modal", () => {
  it("render component", () => {
    const { getByTestId } = render(<Modal testId={"id-modal"} />);
    expect(getByTestId("id-modal")).toBeInTheDocument();
    expect(getByTestId("id-modal").style.display === "none").toBe(true);
  });

  /**
   * ⚠️ this wont work correctly because a ref dont call the rerender method
   * TODO: improve refactoring the useApp to return a state 
   * */ 

//   it("enable and disable modal", () => {
//     const { result } = renderHook(() => useApp());
//     const { getByTestId, rerender,debug } = render(
//       <Modal testId={"id-modal"} isMenuActive={result.current.isActive} />
//     );
    
//     expect(getByTestId("id-modal").style.display === "none").toBe(true);
    
//     // enable
//     act(() => result.current.show());
//     console.log({active:result.current.isActive})
//     rerender(
//       <Modal testId={"id-modal"} isMenuActive={result.current.isActive} />
//     );
//     debug()
//     expect(getByTestId("id-modal").style.display == "none").toBe(false);

//     //disable
//     act(() => result.current.hide());
//     rerender(
//       <Modal testId={"id-modal"} isMenuActive={result.current.isActive} />
//     );
//     expect(getByTestId("id-modal").style.display == "none").toBe(true);
//   });
});
