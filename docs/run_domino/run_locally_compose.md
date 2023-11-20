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
domino platform run-compose --github-token <your_github_token>
```
Or run without a github token (some features will not be available).
```bash
domino platform run-compose
```

This is a convenience command that will:

- Create the necessary folder structure for Domino and Airflow processes
- Create a `docker-compose.yaml` file
- Run the `docker compose up` command

This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.
If everything worked as expected, after all processes started successfully you should be able to navigate to `localhost:3000` to access the Domino frontend service.

:::caution
The platform will not be fully functional if you do not provide a github token.
To run the platform with all features, you need to pass a platform level github token.
You can do this by passing the `--github-token` flag to the command, like this:

```bash
domino platform run-compose --github-token <your_github_token>
```
:::
You can generate a github token by following the instructions [here](./github_token.md).


:::tip
Domino automatically creates an admin user with the following credentials you can use to login:

- **Email**: admin@email.com
- **Password**: admin
:::

If you want to run Domino with a different configuration you can use some CLI arguments to customize the behavior of the `run-compose` command.
To see all the available options you can run:

```bash
domino platform run-compose --help
```
The output should be similar to this:

```bash
Options:
  --d                  Run in detached mode.
  --use-config-file    Use config file to run platform.
  --dev                Run platform in dev mode.
  --debug              Debug mode prints docker compose messages on terminal.
  --stop               Stop and remove containers.
  --github-token       Github token for access default pieces repositories.
  --help               Show this message and exit.
```


Also, if you want to run with compose using the configuration variables from an existing Domino project's `config-domino-local.toml` file you can use the `--use-config-file` flag.
Please ensure that the config-domino-local.toml file is located in the same directory you are running the command from.

```bash
domino platform run-compose --use-config-file
```

:::info
When running with `--use-config-file``, all defined flags in CLI will be ignored and the values from the config file will be used instead.
:::


See more about the configuration file [here](./run_locally_kind.md#local-configuration-file).

