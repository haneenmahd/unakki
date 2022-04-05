import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const initUnakki = async (configPath = process.cwd()) => {
    let questions = await inquirer.prompt([
        {
            name: "name",
            message: "Name your component:"
        },
        {
            name: "rootDir",
            message: "What's the root directory of this component:"
        },
        {
            name: "files",
            message: "Your Files:" 
        }
    ]);

    let resolvedConfigPath = path.resolve(configPath, "unakki.json");
    let config = [
      {
        name: String(questions.name),
        rootDir: questions.rootDir,
        files: [],
      }
    ];

    
    String(questions.files).split(" ").map(file => {
        config[0].files.push({
            name: file
        })
    });

    fs.writeFileSync(resolvedConfigPath, JSON.stringify(config));
}

export default initUnakki;