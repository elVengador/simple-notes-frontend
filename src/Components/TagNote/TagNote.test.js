import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import TagNote from "./TagNote";

const tag = "tag-note";
const notes = ["firth note", "second note"];
const componentTagNote = (
  <TagNote testId="id-tag-note" tag={tag} notes={notes} />
);

describe("TagNote", () => {
  test("1.render component", () => {
    const { getByTestId } = render(componentTagNote);
    expect(getByTestId("id-tag-note")).toBeInTheDocument;
    expect(getByTestId("id-tag-note").childNodes.length).toBe(notes.length + 1);
  });

  test("matches snapshot", () => {
    const tree = renderer.create(componentTagNote).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
