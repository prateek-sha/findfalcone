import React from "react";
import { Footer } from "../Footer";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

it("matches snapshot ", () => {
  const tree = renderer.create(<Footer></Footer>).toJSON();
  expect(tree).toMatchSnapshot();
});
