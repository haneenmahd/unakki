import path from "path";
import fs from "fs";
import createDirRecursive from "../utils/createDirRecursive";
import replaceNameWith from "../utils/replaceNameWith";

class Component {
  /**
   *  
   * @param {import('./index').ComponentConfig} config 
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * Creates specific files required by each component and completes their tasks.
   */
  init(argName) {
    const { rootDir, files } = this.config;
    
    for (const file of files) {
      const formedPath = path.resolve(rootDir, replaceNameWith(file.name, argName));

      createDirRecursive(rootDir); // create directories to make sure that the components can be created.

      fs.writeFileSync(formedPath, file.defaultValue || "// File created by unakki", "utf-8");
    }
  }
}

export default Component;