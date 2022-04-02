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