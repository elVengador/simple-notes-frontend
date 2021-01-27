import { render } from "@testing-library/react";
import Input from "./Input";

describe("component::Form::Input", () => {
  it("render component", () => {
    const { getByTestId, getByLabelText, getByPlaceholderText } = render(
      <Input testId={"id-input"} name={"username"} value={""} />
    );
    expect(getByTestId("id-input")).toBeInTheDocument();
    expect(getByLabelText("username")).toBeInTheDocument();
    expect(getByPlaceholderText("Write your username")).toBeInTheDocument();
  });
  test("change value when write in input", () => {
    const { getByRole, rerender } = render(
      <Input testId={"id-input"} name="username" value={""} />
    );
    expect(getByRole("textbox", { name: "username" })).toHaveValue("");

    // cambio el valor "" -> "elVengador"
    rerender(
      <Input testId={"id-input"} name="username" value={"elVengador"} />
    );
    expect(getByRole("textbox", { name: "username" })).toHaveValue(
      "elVengador"
    );
  });
});
