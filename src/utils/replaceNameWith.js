/**
 * Replaces name variable passed in to the file name property in the `unakki.json` config file.
 * 
 * @param {string} value the value to be set 
 */
export default function replaceNameWith(str, value) {
    return str.replace(/\<name\>/, value);
}