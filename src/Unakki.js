import { Component, Config } from "./index";

/**
 * Unakki's main instance for 
 */
class Unakki {
  /**
   *
   * @param {import('./index').ComponentConfig} config
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
   * @param {string} componentName The component name to target
   * @returns 
   */
  create(componentName) {
    const { config } = this;

    for (let component in config) {
      let currentConfig = config[component];

      if (currentConfig[componentName] !== undefined) {
        return new Component(currentConfig).init();
      }
    }
  }
}

export default Unakki;