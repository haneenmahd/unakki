import path from "path";
import fs from "fs";

class Config {
    /**
     * 
     * Reads the configuration file from the specified directory passed in.
     * @param {string} rootDir Directory where the configuration will be read fro
     * @returns {string} The configuration in stringified format.
     */
    static read(rootDir = process.cwd()) {
        try {
            return fs.readFileSync(path.resolve(rootDir, "unakki.json")).toString();
        } catch (error) {
            throw new Error(`Cannot find configuration file: unakki.json in ${rootDir}.\n${error}`)
        }
    }

    /**
     * 
     * Turns the config into JSON format.
     * @param {string} config config read using the `Config.read()` function 
     * @returns {object | Array} config in json format
     */
    static parse(config) {
        try {
            return JSON.parse(config);
        } catch (error) {
            throw new Error(`An error occured while parsing the config file.\n${error}`)
        }
    }
}

export default Config;