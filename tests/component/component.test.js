import { Component } from "../../src/index";

it("Creates a new component", () => {
  expect(new Component({
      rootDir: `${process.cwd()}/lib-tests/component`,
      files: [
          {
              name: "componentTest.js"
          }
      ]
  }).init()).toBeUndefined();
});