---
sidebar_position: 5
---


# Domino CLI

The Domino command line interface helps users to set up and run a local Domino platform, as well as organize and validate their Domino Piece repositories. You can use `domino --help` to see the available commands and options. The available commands are:

```bash
  piece-repository  # Pieces repository actions
  pieces            # Manage pieces in a repository.
  platform          # Domino platform actions
  run-piece-docker  # Run Piece on Docker container
  run-piece-k8s     # Run Piece on Kubernetes Pod
```

### `domino piece-repository`
This command handles Domino Piece repositories. It allows the user to `organize`, `publish-images`, `release` or `delete-release`.

#### `domino piece-repository organize`
This command is used when you want to validate and build your repository.
1. Validate the folder structure.
2. [optional] Build docker images for the pieces.
3. [optional] Publish images to github container registry.

#### `domino piece-repository publish-images`
This command is used to publish the images of the pieces to the github container registry. It is useful when you don't want to run organize and image publishing at the same time.

#### `domino piece-repository release`
This command is used to release a new version of the pieces in the github packages.

#### `domino piece-repository delete-release`
This command is used to delete a release from the github packages.


### `domino pieces`
This command is responsible for handling with the Domino Pieces. It allows the user to `create` new pieces.
You can use
```
domino pieces --create <piece_name> --repository-path <path/to/repo>
```
to create a new piece. This is the easiest way to create a new piece, as it will create the folder structure and the necessary files for you.

---

### `domino platform`
Perform actions on platform level like `prepare`, `create`, `destroy`, `run-compose`, `stop-compose`.
It is used when you want to create or destroy a domino instance using kind or docker-compose.

#### `domino platform prepare`
Prepare the environment (local folder) for running a Domino platform with Kind. It will create a `config.toml` file with all necessary configuration for the platform.

#### `domino platform create`
Create a Kind cluster, installing and running all necessary Domino services.

#### `domino platform destroy`
Destroy the Kind cluster and all Domino services.

#### `domino platform run-compose`
Run Domino services using docker-compose.

#### `domino platform stop-compose`
Stop Domino services using docker-compose.


### `domino run-piece-docker`
CLI used by the platform for running a piece using docker containers.
:::tip
If you are not a developer of Domino package you should not use this command.
:::

### `domino run-piece-k8s`
CLI used by the platform for running a piece using kubernetes pods.
:::tip
If you are not a developer of Domino package you should not use this command.
:::
