import { Unakki } from "../src/index";
import getAvailableComponents from "../src/utils/getAvailableComponents";

const args = process.argv;

const unakki = new Unakki();

if (args.includes("create") && args.length == 4) {
  let componentName = args[3];

  unakki.run(componentName);

  process.exit(0);
} else if (args.length == 3) {
  const availableComponents = getAvailableComponents();

  availableComponents.map(component => {
    console.log(
      `${component.name}: Creates ${component.files.length} ${component.files.length === 1 ? "component" : "components"} in the ${component.rootDir} folder.`
    );
  });

  process.exit(0);
} else {
  unakki.init();

  process.exit(0);
}