import { Component } from "../../src/index";

it("Creates a new component", () => {
  expect(new Component({
      rootDir: process.cwd(),
      files: [
          {
              defaultValue: "nil",
              name: "componentTest.txt"
          }
      ]
  }).init()).toBeUndefined();
});