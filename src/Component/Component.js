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
      const filePath = replaceNameWith(path.resolve(rootDir, file.name), argName);

      createDirRecursive(rootDir); // create directories to make sure that the components can be created.

      // create any subdirectories
      if (path.dirname(file.name)) {
        let subDirname = replaceNameWith(path.dirname(file.name), argName);
        let subDirectory = path.resolve(rootDir, subDirname);

        fs.existsSync(subDirectory) || fs.mkdirSync(subDirectory);
      }

      fs.writeFileSync(filePath, file.defaultValue || "// File created by unakki", "utf-8");
    }
  }
}

export default Component;