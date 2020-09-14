import React from "react";
import { Index } from "../Index";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import { ContextProvider } from "../../../context/ContextProvider";

it("matches snapshot loading", () => {
  const state = {
    loading: true,
    error: false,
    planets: [],
    vehicles: [],
  };
  const tree = renderer
    .create(
      <ContextProvider state={state}>
        <Index />
      </ContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot error", () => {
  const state = {
    loading: false,
    error: true,
    planets: [],
    vehicles: [],
  };
  const tree = renderer
    .create(
      <ContextProvider state={state}>
        <Index />
      </ContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
