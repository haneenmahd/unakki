#!/usr/bin/node

import { Unakki } from "../src/index";
import getAvailableComponents from "../src/utils/getAvailableComponents";
import chalk from "chalk";

const { bold: boldText, green: greenText, grey: greyText } = chalk;

const args = process.argv;

const unakki = new Unakki();

if (args.includes("create") && args.length >= 4) {
  let componentName = args[3];
  let componentArgName = args[4] || "";

  console.log(componentArgName)

  unakki.run(componentName, componentArgName);

  process.exit(0);
} else if (args.length == 3) {
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
  unakki.init();

  process.exit(0);
}