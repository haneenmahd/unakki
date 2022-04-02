import { Config } from "../index";

/**
 * 
 * Returns the components defined in the `unakki.json` config file. 
 * @returns {import("../Component").ComponentConfig[]}
 */
export default function getAvailableComponents() {
    return Config.parse(Config.read());
}