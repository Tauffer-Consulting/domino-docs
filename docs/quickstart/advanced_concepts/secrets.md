---
sidebar_position: 1
description: "Pieces Repositories Secrets"
keywords: ["domino", "workflow", "airflow", "data", "machine learning", "ml", "data science", "data engineering", "dataops", "mlops", "devops", "kubernetes", "k8s", "helm", "python", "react", "typescript", "fastapi", "gitops", "docker", "github", "artifacthub", "pypi", "pip", "kind", "open source", "oss", "low code", "no code", "automation",
"versio control", "collaboration", "monitoring", "orchestration", "data pipeline"]
---

# Secrets

Frequently in advanced workflows you will need to use Pieces that require a secret variable to be set. For example, you may need to use a Piece to fetch data from an API that requires a Bearer token. In this case, you will need to set the secret variable to the Piece Repository the Piece belongs to. In Domino the secrets with same name are shared between Pieces from the same repository, so you only need to set the secret once. Example: Two Pieces with `API_KEY` secret means that both Pieces will use the same value for this variable.

To edit a Piece Repository secret do the following steps:
1. Go to your Workspace configuration page.
2. Click on the `Edit repository secrets` icon on the desired repository. This will open the list of secrets for that repository.
3. Click on the `Edit` icon on the desired secret and fill the value you want.
4. Click on `Save` button.

Done! Now all pieces that you this secret will use the value you set.
![Edit repository secrets](/img/advanced_workflows/editing_secrets.gif)