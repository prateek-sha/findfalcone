import React from "react";
import { Header } from "../Header";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

it("matches snapshot ", () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
