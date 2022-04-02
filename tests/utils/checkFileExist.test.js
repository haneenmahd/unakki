import checkFileExist from "../../src/utils/checkFileExist";

it("Check for a non-existent file", () => {
    expect(checkFileExist(`${Math.random() * 1000}.txt`)).toEqual(false);
});

it("Check for a existing file", () => {
    expect(checkFileExist(`${process.cwd()}/package.json`)).toEqual(true); // the root of the project will always have a package.json
})