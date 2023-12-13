---
sidebar_position: 1
---

# Authorize access to Github repositories

This session will guide you through the steps necessary to authorize Domino to access Pieces repositories on Github.

## Create a Github token
Domino uses a platform level Github token to access repositories. If no token is provided, Domino will still be able to run, but some features will not be available. For the platform level token, we recommend you to create a Github token with read access to public repositories.

Besides the platform level token, Domino also provides a way to use a different token for each Workspace, so you can control which repositories each Workspace can access.

To create a Github token, follow the steps below or check the [Github documentation](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

1. You can generate either a [classic](https://github.com/settings/tokens/new) or [fine-grained](https://github.com/settings/personal-access-tokens/new) **Personal access tokens**.
2. Enter a name, an expiration date and a description for your token.
3. Select the **Scope** of your token. For most cases a least priviledged token that is only allowed to read from public repositories will be good enough.
4. [Optional for private repositories] Under **Resource owner**, select the organization or user that owns the repositories you want to access.
5. Click **Generate token**.
6. Copy the token and **save it** in a safe place. You will need it to run Domino with all features.



