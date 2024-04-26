---
sidebar_position: 1
---

# Development with compose

:::caution

You should never use this mode in production. It is intended for development only. To run Domino locally in an environment closer to a production environment, see [Run locally with Kind](../run_domino/run_locally_kind.md) for test proposes see [Run locally with compose](../run_domino/run_locally_compose.md) 

:::

This method is the simplest way to test Domino locally, it uses Docker Compose to run all the necessary services:


## Dependencies

In order to run Domino locally for development, you need to have these dependencies installed:

- **Docker engine** 20.0 or greater. You can install it by following the instructions [here](https://docs.docker.com/engine/install/).
- **Docker Compose** V2. You can install it by following the instructions [here](https://docs.docker.com/compose/install/).


This command might take up to a few minutes to execute, since it will download and run all the necessary docker images.
If everything worked as expected, after all processes started successfully you should be able to navigate to `localhost:3000` to access the Domino frontend service.


```bash
docker compose -f docker-compose-dev.yaml up
```

:::tip
Domino automatically creates an admin user with the following credentials you can use to login:

- **Email**: admin@email.com
- **Password**: admin
:::

## Change code

For now on, every modification you made in `frontend` and `rest` folders will take effect immediately, but for each sub-project you may need some configurations on your development environment to use autocomplete and references.

* [Frontend](./frontend.md)
* [Rest](./rest.md)

:::note
Domino package does not support hot reload in compose mode, but you can follow the [Kubernetes guide](../run_domino/run_locally_kind.md#local-deployment-for-development) to be able to test modifications there.
:::

* [Domino-py](./domino-py.md)