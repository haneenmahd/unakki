import fs from "fs";

/**
 * 
 * Creates a directory in a recursive
 * @param {string} dirPath Directory path
 * @returns {string}
 */
export default function createDirRecursive(dirPath) {
    return fs.mkdirSync(dirPath, {
        recursive: true
    });
}