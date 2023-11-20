---
sidebar_position: 3
---

# Authorizing Domino to access your Github repositories

This session will guide you through the steps necessary to authorize Domino to access your Github repositories.

## Create a Github token
Domino uses a platform level Github token to access your repositories. If no token is provided, Domino will still be able to run, but some features will not be available.  
Besides the platform level token, Domino also provides a way to use a different token for each Workspace, so you can control which repositories each Workspace can access.
For the platform level token, we recommend you to create a Github token with read access to public repositories.

To create a Github token, follow the steps below or check the [Github documentation](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token).

1. Go to your Github account settings.
2. Click on **Developer settings**.
3. Click on **Personal access tokens** and then on **Fine Grained Tokens**.
4. Click on **Generate new token**.
5. Enter a name, an expiration date and a description for your token.
6. Under **Resource owner**, select the organization or user that owns the repositories you want to access (only necessary for private repos).
7. Select the **Scope** of your token. A token with no assigned scopes can only access public information.
8. Click **Generate token**.
9. Copy the token and **save it** in a safe place. You will need it to run Domino with all features.



