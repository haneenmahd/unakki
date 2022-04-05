import { Unakki } from "../../src/index";

it("Create a new component set from a multiple component config", () => {
    expect(new Unakki([
        {
            rootDir: "lib-tests",
            files: [
                {
                    name: "componentTest.js"
                }
            ]
        }
    ]).init()).toEqual(true);
})

it("Create and run a new component with componentArgument passed in", () => {
    expect(
      new Unakki([
        {
          name: "test",
          rootDir: "lib-tests/arg",
          files: [
            {
              name: "<name>-componentArgTests.js",
            },
          ],
        },
      ]).run("test", "testArg")
    ).toEqual(true);
})