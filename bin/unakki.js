#!/usr/bin/env node

import { Unakki } from "../src/index";
import getAvailableComponents from "../src/utils/getAvailableComponents";
import chalk from "chalk";
import initUnakki from "../src/utils/initUnakki";

const { bold: boldText, green: greenText, grey: greyText } = chalk;

const args = process.argv;

if (args.includes("init")) {

  initUnakki(args[3]);
  // Initialises unakki 🚀

} else if (args.includes("create") && args.length >= 4) {

  const unakki = new Unakki();
  let componentName = args[3];
  let componentArgName = args[4] || "";

  unakki.run(componentName, componentArgName);

  process.exit(0);

} else if (!args.includes("create") && args.length == 3) {

  const availableComponents = getAvailableComponents();

  availableComponents.map(component => {
    console.log(
      `${boldText(component.name)}: Creates ${greenText(
        component.files.length
      )} ${
        component.files.length === 1 ? "component" : "components"
      } in the ${greyText(component.rootDir)} folder.`
    );
  });

  process.exit(0);

} else {

  const unakki = new Unakki();

  unakki.init();

  process.exit(0);

}