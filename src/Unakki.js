import { Component, Config } from "./index";

/**
 * Unakki's main instance for 
 */
class Unakki {
  /**
   *
   * @param {import('./Component/index').ComponentConfig[]} config
   */
  constructor(config = Config.parse(Config.read(process.cwd()))) {
    this.config = config;
  }

  /**
   * Initialised the whole of unakki with the multiple components without having to loop through the config manually.
   */
  init() {
    const { config } = this;

    for (let componentConfig of config) {
      new Component(componentConfig).init();
    }

    return true;
  }

  /**
   * 
   * Creates only the specific component passed in.
   * @param {string} componentName The component name to target
   * @returns 
   */
  run(componentName, argName) {
    const { config } = this;

    for (let currentConfig of config) {
      if (currentConfig.name == componentName) {
        return new Component(currentConfig).init(argName);
      }
    }
  }
}

export default Unakki;