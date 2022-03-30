import path from "path";
import fs from "fs";

class Config {
    static read(rootDir) {
        try {
            return fs.readFileSync(path.resolve(rootDir, "unakki.json")).toString();
        } catch (error) {
            throw new Error(`An error occured while reading the configuration.\n${error}`)
        }
    }
}

export default Config;