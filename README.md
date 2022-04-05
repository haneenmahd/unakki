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

# Configuring ⛓
Configuring your project with unakki along with other config files can be very hard. So, We have build a simple `init` argument inside the 
CLI to intialise the project with a single component.

You can initialise your project with this command:
```sh
unakki init
```


After running this command you will need to answer some questions in-order to configure the project.

**Name your component**: The name of the component you need to re-use, this can be very simple like "util", "view", "ui", "core" etc.

**Root Directory**: The root directory where the components will exist, this was meant to create because we don't need to use absolute path 
for 
files every time. This property make that part simple.

**Files**: The files you want when you are actually creating a new component. You can add more files by seperating them with a gap like this 
" 
". This property will pass on the argument <name>, which is passed on from the CLI at the runtime of this component. These can be used 
in-order to create much more simpler workflow in your project.

For example, you want to create a component named *hello.js* in the folder `/src/fun` folder. Everytime, you don't want to create the same 
file again and again. This is why we implemented a template string like structure in the **files** property.

Let's take a look at this in action:
```sh
yarn dev create <component-name> <name-argument> # name-argument will be passed onto when creating the files.
```

So according to this function, you can re-use your files in this way of configuring it.
```
files: <name>.util.js # or name.test.js or anything
```

## Configuring using JSON
Most of the time the CLI cannot be very helpful at configuring things for your project. This is why you need to know what's actually inside 
our config file.

First of all, our config file is an array of components.

- **name**: Component name
- **rootDir**: The root directory of the component
- **files**: The files that should be created when creating this component, this is an array of files.
	- **name**: File name
	- **defaultValue**: The default value inside a specific file, by default we add a text "// File created by unakki" inside every 
	  component.

# Support ❤️
We are very grateful, if you could support us by giving a star for this repo ⭐️

# License 📜
This project `unakki` is licensed under the MIT license.
