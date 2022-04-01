import Config from "./Config/Config";
import Component from "./Component/Component";

const config = Config.read(process.cwd());
const component = new Component(Config.parse(config));

component.init()
