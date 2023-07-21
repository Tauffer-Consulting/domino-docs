---
sidebar_position: 1
---

# What is Domino?

Domino is an open source workflow management platform, with:

- an intuitive [Graphical User Interface](https://tauffer-consulting.github.io/domino-docs/) that facilitates creating, editing and monitoring any type of Workflow, from data processing to machine learning
- a standard way of writing and publishing functional [Pieces](https://tauffer-consulting.github.io/domino-docs/), which follows good practices for data modeling, documentation and distribution
- a [REST API](https://tauffer-consulting.github.io/domino-docs/) that controls a running Apache Airflow instance

Creating Workflows in the GUI is as simple as dragging and dropping Pieces to the canvas and connecting them. The user can also schedule the Workflow to run periodically, at a specific date/time, or trigger it manually. The monitoring page shows the status of each Workflow Piece in real time, including the logs and results of each run.

![Domino create workflow](/img/7_create_workflow.gif)


### Domino vs Apache Airflow

Every Domino Workflow corresponds to an Apache Airflow DAG, and each Piece corresponds to an Airflow task. Domino controls an Airflow instance, which is responsible for executing, scheduling and monitoring the Workflows (DAGs).

You can think of Domino as Airflow with superpowers, where users can:

- create highly complex Workflows with simple point-and-click and drag-and-drop operations, in an user-friendly GUI
- make use of Pieces developed by other people, share and reuse your own Pieces
- collaborate in groups to edit and monitor Workflows
- experience a cleaner and more intuitive GUI for viewing Workflows results, including logs and richer reports with images and tables


### Development

The source code of the project is available [here](https://github.com/Tauffer-Consulting/domino).

Domino is a modular and open source software, which allows for contributions from a large spectrum of expertises, from DevOps to frontend developers:

- Frontend is written in React / Typescript
- REST API written in Python with FastAPI
- Worflows management is performed by Apache Airflow
- GitOps approach to host and version Pieces and Workflows
- Pieces data models are defined with Pydantic
- Pieces are built and distributed as Docker images, hosted in public repositories such as Github Container Registry
- Domino runs on Kubernetes, both in the cloud or locally (using Kind)
- Domino is distributed as a pip installable package and a Helm chart


### Resources

Here's a list of the main resources for Domino:

- [Python package](https://pypi.org/project/domino-py/)
- [Helm chart](https://artifacthub.io/packages/helm/domino/domino)
- [REST API image](https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-rest)
- [Frontend image](https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-frontend)
- [Airflow image with Domino extension](https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-airflow-base)
- [Base Piece image](https://github.com/Tauffer-Consulting/domino/pkgs/container/domino-airflow-pod)

