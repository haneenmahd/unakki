import Config from "./Config/Config";
import Component from "./Component/Component";

const config = Config.read(process.cwd());

for (let componentConfig in config) {
    new Component(Config.parse(componentConfig)).init();
}
