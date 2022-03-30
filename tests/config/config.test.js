import Config from "../../src/Config/Config";

it("Config is empty", () => {
    expect(JSON.parse(Config.read("."))).toEqual({});
});