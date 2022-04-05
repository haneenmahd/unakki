# unakki 🤺
[![CI 🤺](https://github.com/haneenmahd/unakki/actions/workflows/node.js.yml/badge.svg)](https://github.com/haneenmahd/unakki/actions/workflows/node.js.yml)

Automate the process of creating re-usable components and modules 😵.
Have you ever been exhausted and tired of creating the components and new modules in your javascript project. And then I'm pretty sure that you are on the who should defenitely try out **Unakki 🤺**.

## What is Unakki 🤔?
**Unakki 🤺** is a simply configurable and usable CLI application for organising your project. It helps in keeping a re-usable copy of how your project should be looking inside a `JSON` configuration file. And after configuring it with the right settings, you can create components instantly ⚡️ with a single command by running:
```
unakki create <the-component-name>
```

## Why Unakki 🧐?
When creating and maintaining a project at any scale, you will exhaust most of your time handling with the files, components or modules or in other words **Unakki** helps you in organising your code in a componentised-way.

# Configuring
Configuring your project with unakki along with other config files can be very hard. So, We have build a simple `init` argument inside the 
CLI to intialise the project with a single component.

You can initialise your project with this command:
```sh
unakki init
```.

After running this command you will need to answer some questions in-order to configure the project.
```sh

Name your component: The name of the component you need to re-use, this can be very simple like "util", "view", "ui", "core" etc.

Root Directory: The root directory where the components will exist, this was meant to create because we don't need to use absolute path for 
files every time. This property make that part simple.

Files: The files you want when you are actually creating a new component. You can add more files by seperating them with a gap like this " 
". This property will pass on the argument <name>, which is passed on from the CLI at the runtime of this component.
```
