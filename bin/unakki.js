import { Unakki } from "../src/index";

const args = process.argv;

const unakki = new Unakki();

if (args.includes("create") && args.length == 4) {
  let componentName = args[3];

  unakki.run(componentName);

  process.exit(0);
} else if (args.length == 3) {
    throw new Error("Please pass in the name of the component to create!")
} else {
    unakki.init();
}