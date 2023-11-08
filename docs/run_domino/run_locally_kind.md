---
sidebar_position: 2
---

# Run locally with Kind

This session will guide you through the steps necessary to run the Domino platform locally:

1. Install the necessary dependencies.
2. Create a Github repository to store your Workflows and create Github access tokens.
3. Use `domino platform prepare` to prepare the configuration of the platform.
4. Configure the Workflows Repository for GitSync.
5. Run the platform locally using `domino platform create`.


## Dependencies

In order to run Domino locally, you need to have these dependencies installed:

- **Python** 3.9 or greater.
- **Docker Engine** 20.0 or greater. You can install it by following the instructions [here](https://docs.docker.com/engine/install/).
- **kubectl**, the command line tool for interacting with Kubernetes. You can install it by following the instructions [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/).
- **Helm**, a package manager for Kubernetes. You can install it by following the instructions [here](https://helm.sh/docs/intro/install/).  
- **Kind** 0.20.0 or greater, a local Kubernetes cluster. You can install it by following the instructions [here](https://kind.sigs.k8s.io/).
- **Kind with GPU (optional)** Kind doesn't have official support for GPU, but there is a Fork made by Jacob Tomlinson that you can use to run Kind with GPU support. You can find the fork [here](https://github.com/jacobtomlinson/kind/pull/1/) and his blog post about it [here](https://jacobtomlinson.dev/posts/2022/quick-hack-adding-gpu-support-to-kind/).
- **Domino CLI**.

The Domino CLI can be installed via pip. We reccommend you install Domino in a separate Python environment.

```bash
pip install domino-py[cli]
```

## Workflows repository and Github tokens

Domino Workflows are in essence Airflow DAG files, and the recommended way to store Airflow DAG files in production is to use a Git repository. Create a Github repository (either private or public) to be used as a remote storage for the Workflows files.

Next, you should create two [Github access tokens](https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token):

- `DOMINO_GITHUB_ACCESS_TOKEN_WORKFLOWS`, with **read and write** access to the Workflows repository
- `DOMINO_DEFAULT_PIECES_REPOSITORY_TOKEN`, with **read-only** access to public Pieces repositories

`DOMINO_GITHUB_ACCESS_TOKEN_WORKFLOWS` can be configured as a fine-grained access token with only the necessary permissions:

- Contents (read and write)
- Metadata (read)
  
then you can store them as environment variables or just save them to use later with `domino platform prepare` command.

```bash
# Token with read access to public Pieces repositories
export DOMINO_GITHUB_ACCESS_TOKEN_WORKFLOWS=<your-read-write-workflows-repository-github-access-token>
export DOMINO_DEFAULT_PIECES_REPOSITORY_TOKEN=<your-read-only-pieces-repositories-github-access-token>
```


## Prepare the platform with Domino CLI

You can use Domino CLI to prepare the configuration file and environment variables necessary to run the Domino platform locally by running:

```bash
domino platform prepare
```

The `domino platform prepare` command will ask you for the following information:

- **Local cluster name**: The name of the Kind cluster that will be created **(optional)**.
- **Workflows repository**: The Github repository you just created where the workflows will be stored **(required)**.
- **Github ssh private for Workflows repository**: The private ssh deploy key of the Github workflows repository you just created **(optional)**. If not provided, it will generate a ssh key pair to be used as described in [Configure Workflows Repository GitSync](./run_locally_kind#configure-workflows-repository-gitsync).
- **Github token for Pieces repository**: The Github access token with read access to public Pieces repositories **(required)**.
- **Github token for Workflows repository**: The Github access token with read and write access to the workflows repository **(required)**.
- **Deploy Mode**: The platform deploy mode. It should be set to **local-k8s** **(optional)**.
- **Local pieces repository path**: Local paths for domino pieces repositories **(optional)**. Only used for local development , see [Local deployment for development](./run_locally_kind#local-deployment-for-development).
- **Local domino path**: Local path for domino package **(optional)**. Only used for local development , see [Local deployment for development](./run_locally_kind#local-deployment-for-development).

After that, it will create a configuration file `config-domino-local.yaml` with values based on existing environment variables or the user input in the CLI steps.
This file contains the variables necessary to run the Domino platform locally. 
You can edit it according to your needs. A full description of all these variables can be found at [Local configuration file](./run_locally_kind#local-configuration-file).  

Now you must configure the Workflows Repository GitSync.


## Configure the Workflows Repository for GitSync

To configure the Workflows Repository for GitSync access, you should open the `config-domino-local.yaml` and copy the `DOMINO_GITHUB_WORKFLOWS_SSH_PUBLIC_KEY` value. Then, you should add this value as a **deploy key** to your Github workflows repository. The deploy key section can be found in your workflows repository settings as shown in the image below:

![Workflows repository deploy key](/img/deploy-keys.png)

With the workflows repository access configured, you can now create a local Domino platform using the CLI.

## Create the platform with Domino CLI

```bash
domino platform create
```

This is a convenience command that will:

- Check if all the necessary variables are defined, either in the `config-domino-local.yaml` file or as environment variables
- Create a Kind cluster
- Download and install the necessary Helm charts
- Expose the chosen services

If everything worked as expected, you should see a success message in your terminal. You can then navigate to `localhost` to access the Domino frontend service.

![Domino platform create success](/img/domino-create-success.png)


## Running with GPU support

If you have pieces that require GPU, you can run the Domino platform with GPU support. 
First, you must install the **Kind with GPU** version as reference in the [Dependencies](./run_locally_kind#dependencies) section, then you can run the `domino platform create` command with the `--use-gpu` flag:

```bash
domino platform create --use-gpu
```

## Local configuration file

When running the `domino platform prepare` command, some parameters will be automatically filled in the configuration file and others will be asked to the user.  
This is the content of the configuration file and the description of each of its variables:

```toml
[path]
DOMINO_LOCAL_RUNNING_PATH = ""

[kind]
DOMINO_KIND_CLUSTER_NAME = "domino-cluster"
DOMINO_DEPLOY_MODE = "local-k8s"

[github]
DOMINO_GITHUB_WORKFLOWS_REPOSITORY = ""
DOMINO_DEFAULT_PIECES_REPOSITORY_TOKEN = ""
DOMINO_GITHUB_ACCESS_TOKEN_WORKFLOWS = ""
DOMINO_GITHUB_WORKFLOWS_SSH_PRIVATE_KEY = ""
DOMINO_GITHUB_WORKFLOWS_SSH_PUBLIC_KEY = ""

[domino_db]
DOMINO_DB_HOST = "postgres"
DOMINO_DB_PORT = "postgres"
DOMINO_DB_USER = "postgres"
DOMINO_DB_PASSWORD = "postgres"
DOMINO_DB_NAME = "postgres"
```

* `DOMINO_LOCAL_RUNNING_PATH` **[Automatic]** - The path where the Domino platform is being created.
* `DOMINO_KIND_CLUSTER_NAME` **[Optional]** - The name of the Kind cluster.
* `DOMINO_DEPLOY_MODE` **[Automatic]** - The deploy mode. It should be set to **local-k8s**.
* `DOMINO_GITHUB_WORKFLOWS_REPOSITORY` **[Required]** - The Github repository where the workflows will be stored.
* `DOMINO_DEFAULT_PIECES_REPOSITORY_TOKEN` **[Required]** - The Github access token with read access to public Pieces repositories.
* `DOMINO_GITHUB_ACCESS_TOKEN_WORKFLOWS` **[Required]** - The Github access token with read and write access to the workflows repository.
* `DOMINO_GITHUB_WORKFLOWS_SSH_PRIVATE_KEY` **[Optional]** - The private key of the Github deploy key pair used to access the workflows repository. If not provided, it will generate a ssh key pair to be used as described in [Workflows repository and Github tokens](./run_locally_kind#workflows-repository-and-github-tokens).
* `DOMINO_GITHUB_WORKFLOWS_SSH_PUBLIC_KEY` **[Automatic]** - The public key of the Github deploy key pair used to access the workflows repository. If **ssh private key** was not provided, it will generate a ssh key pair to be used and this value should be pasted in the Github repository deploy keys section as describe in [Workflows repository and Github tokens](./run_locally_kind#workflows-repository-and-github-tokens).
* `DOMINO_DB_HOST` **[Automatic]** - The database host. You can change it if you want to use an external database.
* `DOMINO_DB_PORT` **[Automatic]** - The database port. You can change it if you want to use an external database.
* `DOMINO_DB_NAME` **[Automatic]** - The database name. You can change it if you want to use an external database.
* `DOMINO_DB_USER` **[Automatic]** - The database user. You can change it if you want to use an external database.
* `DOMINO_DB_PASSWORD` **[Automatic]** - The database password. You can change it if you want to use an external database.



## Local deployment for development

For development, you can configure hot reloading for the **Domino package** and for **local Pieces Repositories**.
In order to do that you can run `domino platform prepare` and you will be asked for the same configuration as described in [Prepare the platform with Domino CLI](./run_locally_kind#prepare-the-platform-with-domino-cli),
but now you must set `deploy_mode=local-k8s-dev` and provide the local paths for the Domino package and for the local Pieces Repositories for hot reloading purposes.

- **Deploy Mode**: The platform deploy mode. It should be set to **local-k8s-dev** **(required)**.
- **Local pieces repository path**: Local paths for domino pieces repositories **(optional)**. Only used for hot reloading on pieces code. You can provide multiple paths as a list of strings, example:
  `["path/to/pieces/repository1", "path/to/pieces/repository2"]`. It will allow you to change the code in the local pieces repositories and the changes will be reflected in the Domino platform without the need to rebuild the docker images.
- **Local domino path**: Local path for domino package **(optional)**. Only used for hot reloading of domino package code, example: `/path/to/local/domino`

These options can be also configured directly in the `config-domino-local.yaml` file in `dev` section.
The final configuration file should look like this:

```toml
[path]
DOMINO_LOCAL_RUNNING_PATH = "/path/to/local/project"

[kind]
DOMINO_KIND_CLUSTER_NAME = "domino-cluster"
DOMINO_DEPLOY_MODE = "local-k8s-dev"

[github]
DOMINO_GITHUB_WORKFLOWS_REPOSITORY = "My-Organization/domino-workflows-repository"
DOMINO_DEFAULT_PIECES_REPOSITORY_TOKEN = "ghp_somerandomtoken"
DOMINO_GITHUB_ACCESS_TOKEN_WORKFLOWS = "ghp_somerandomtoken"
DOMINO_GITHUB_WORKFLOWS_SSH_PRIVATE_KEY = "LS0..."
DOMINO_GITHUB_WORKFLOWS_SSH_PUBLIC_KEY = "ssh-rsa AAAAB..."

[domino_db]
DOMINO_DB_HOST = "postgres"
DOMINO_DB_PORT = "postgres"
DOMINO_DB_USER = "postgres"
DOMINO_DB_PASSWORD = "postgres"
DOMINO_DB_NAME = "postgres"

[dev]
DOMINO_LOCAL_DOMINO_PACKAGE = "/path/tolocal/domino"
DOMINO_AIRFLOW_IMAGE = ""
DOMINO_REST_IMAGE = ""
DOMINO_FRONTEND_IMAGE = ""
some_local_pieces_repository_name = "/path/to/local/pieces/repository"
```

* `DOMINO_LOCAL_DOMINO_PACKAGE` **[Optional]** - The path to a local version of the Domino package. Only used for hot reloading of domino package code.
* `DOMINO_AIRFLOW_IMAGE` **[Optional]** - The name of a local version of the Domino Airflow image.
* `DOMINO_REST_IMAGE` **[Optional]** - The name of a local version of the Domino REST image.
* `DOMINO_FRONTEND_IMAGE` **[Optional]** - The name of a local version of the Domino Frontend image.

To build the images, you can run the following commands from the root of the Domino repository:

```bash
docker build -f ./frontend/Dockerfile.prod -t domino-frontend ./frontend
docker build -f ./rest/Dockerfile -t domino-rest ./rest
docker build -f Dockerfile-airflow-domino-base-dev -t domino-airflow .
```

and then set the image names in the `config-domino-local.yaml` file.

```toml
[dev]
DOMINO_AIRFLOW_IMAGE = "domino-airflow"
DOMINO_REST_IMAGE = "domino-rest"
DOMINO_FRONTEND_IMAGE = "domino-frontend"
```