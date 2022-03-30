import fs from "fs";

/**
 * Checks if a file exists
 * 
 * @param {string} path 
 * @returns {boolean}
 */
function checkFileExist(path) {
    return fs.existsSync(path);
}

export default checkFileExist;