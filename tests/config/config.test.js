import Config from "../../src/Config/Config";

it("Parse empty config", () => {
    expect(Config.parse("{}")).toEqual({});
});

it("Read and parse config", () => {
  expect(Config.read()).not.toBeUndefined();
  
  expect(Config.parse(Config.read()).length).toBeGreaterThan(0);
});