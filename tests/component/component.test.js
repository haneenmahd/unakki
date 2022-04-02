import { Component } from "../../src/index";

it("Creates a new component", () => {
  expect(new Component({
      rootDir: process.cwd(),
      files: [
          {
              name: "componentTest.js"
          }
      ]
  }).init()).toBeUndefined();
});