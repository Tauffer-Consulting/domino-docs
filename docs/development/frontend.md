---
sidebar_position: 2
---

# Domino UI

## ⬇️ Install dependencies

If you choose to use [docker-compose-dev.yml](./run-dev.md) (recommended), you will now be able to make changes and verify the modifications through hot reload. However, for your preferred editor's autocomplete to work, you will need to install the dependencies using pnpm.

To do this, you will need to install node-js > 16 <= 20 and the `pnpm` package manager itself.

As a recommendation, use the [`n`](https://github.com/tj/n) or [`nvm`](https://github.com/nvm-sh/nvm) package to install the desired node version (the recommendation is NodeJS LTS 18.18.2)

After that, just use `npm` (package manager installed with node) to install `pnpm`

```bash
npm install -g pnpm
```

with that, navigate to the frontend root folder with `cd ./frontend` and run the command:

```bash
pnpm install
```

This way, all dependencies related to the frontend will be installed in the newly created node_modules folder.

:::tip
If your modifications include an external lib, after adding it with
```bash
pnpm install <lib>
``` 
make sure to re-build the frontend image with the command
```bash
docker compose -f docker-compose-dev.yaml build domino_frontend
``` 
at the root of the project, since the libraries are not mapped into the container due to operating system compatibility and performance.
:::

## 🗄️ Project Structure

Most of the code lives in the `./frontend/src` folder and looks like this:

```sh
src
|
+-- @types            # base types used across the application
|
+-- components        # shared components used across the entire application
|
+-- config            # all the global configuration, env variables etc. get exported from here and used in the app
|
+-- context           # shared context used across the entire application
|
+-- features          # feature based modules
|
+-- providers         # all of the application providers
|
+-- routes            # routes configuration
|
+-- services          # re-exporting different libraries preconfigured for the application
|
+-- test              # test utilities and mock server
|
+-- utils             # shared utility functions
```

In order to scale the application in the easiest and most maintainable way, keep most of the code inside the `features` folder, which should contain different feature-based things. Every `feature` folder should contain domain specific code for a given feature. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things. This is much easier to maintain than a flat folder structure with many files.

A feature could have the following structure:

```sh
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- context     # context scoped to a specific feature
|
+-- pages       # route components for a specific feature pages
|
+-- types       # typescript types for TS specific feature domain
|
+-- utils       # utility functions for a specific feature
|
+-- index.ts    # entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature
```

Everything from a feature should be exported from the `index.ts` file which behaves as the public API of the feature.

You should import stuff from other features only by using:

`import {AwesomeComponent} from "features/awesome-feature"`

and not

`import {AwesomeComponent} from "features/awesome-feature/components/AwesomeComponent`

This was inspired by how [NX](https://nx.dev/) handles libraries that are isolated but available to be used by the other modules. Think of a feature as a library or a module that is self-contained but can expose different parts to other features via its entry point.
