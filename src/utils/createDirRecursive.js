import fs from "fs";
import path from "path";
import checkFileExist from "./checkFileExist";

/**
 * 
 * Creates a directory in a recursive
 * @param {string} dirPath Directory path
 * @returns {string}
 */
export default function createDirRecursive(dirPath) {
    return dirPath.split(path.sep).reduce((directories, directory) => {
        directories += `${directory}/${path.sep}`;

        if (!checkFileExist(directories)) {
            fs.mkdirSync(directories);
        }

        return directories;
    })
}