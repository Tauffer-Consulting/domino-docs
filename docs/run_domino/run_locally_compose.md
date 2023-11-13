---
sidebar_position: 1
---

# Run locally with Docker Compose

:::caution

You should never use this mode in production. It is intended for development and testing purposes only. To run Domino locally in an environment closer to a production environment, see [Run locally with Kind](./run_locally_kind)

:::

This method is the simplest way to test Domino locally, it uses Docker Compose to run all the necessary services:

1. Install the necessary dependencies
2. Use Domino command line interface to run the platform locally



## Dependencies

In order to run Domino locally, you need to have these dependencies installed:

- **Python** 3.9 or greater.
- **Docker engine** 20.0 or greater. You can install it by following the instructions [here](https://docs.docker.com/engine/install/).
- **Docker Compose** V2. You can install it by following the instructions [here](https://docs.docker.com/compose/install/).
- **Domino CLI**.


The Domino CLI can be installed via pip. We reccommend you install Domino in a separate Python environment.

```bash
pip install domino-py[cli]
```



## Run locally using Domino CLI

You can use Domino command line interface to easily run the Domino platform locally.
Go to a new, empty directory and run the following command:

```bash
domino platform run-compose
```

This is a convenience command that will:

- Create the necessary folder structure for Domino and Airflow processes
- Create a `docker-compose.yaml` file
- Run the `docker compose up` command

This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.
If everything worked as expected, after all processes started successfully you should be able to navigate to `localhost:3000` to access the Domino frontend service.


To run with compose using the configuration variables from an existing Domino project's  `config-domino-local.toml` file you can use the `--use-config-file` flag.
Please ensure that the config-domino-local.toml file is located in the same directory you are running the command from.

```bash
domino platform run-compose --use-config-file
```