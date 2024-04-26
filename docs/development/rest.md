---
sidebar_position: 3
---

# Domino REST

## ⬇️ Install dependencies

Domino REST uses FastAPI to expose routes and communicate with the frontend, if you are running with [docker-compose-dev.yml](./run-dev.md) (recommended), you will now be able to make changes and verify the modifications through hot reload. However, for your preferred editor's autocomplete to work, you will need to install the dependencies using [python 3.9 or above](https://www.python.org/downloads/).

We suggest you create a virtual environment and install the dependencies in there. You can choose the way you want to create the virtual environment. Here is a suggestion:

```bash
# Create the virtual env with python 3.9
python3.9 -m venv venv 
# Activate the virtual env
source venv venv/bin/activate
```

After that you can install the dependencies and use your preferred editor to modify the code

```bash
# Install the dependencies
pip install -r requirements.txt
```

## Making changes and testing

The backend app will be running at `http://localhost:8000/` and you can check and test the available endpoints at `http://localhost:8000/docs`.
