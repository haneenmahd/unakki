import Config from "./Config/Config";
import Component from "./Component/Component";

const config = Config.read(process.cwd());

for (let componentConfig of Config.parse(config)) {
  new Component(componentConfig).init();
}
