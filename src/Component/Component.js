import path from "path";
import fs from "fs";
import checkFileExist from "../utils/checkFileExist";

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
  init() {
    const { rootDir, files } = this.config;
    
    for (const file of files) {
      const formedPath = path.resolve(rootDir, file.name);

      fs.writeFileSync(formedPath, file.defaultValue, "utf-8");

      if (!checkFileExist(formedPath)) {
        this.init(); // run it again to fix it, please prevent infinite loop here
      }
    }
  }
}

export default Component;