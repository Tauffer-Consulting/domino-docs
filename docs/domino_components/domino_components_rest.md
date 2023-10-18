---
sidebar_position: 2
---

# Domino REST API

The backend service is a REST API that controls a running Apache Airflow instance. It is responsible for:

- executing operations requested by the frontend service
- interacting with the Airflow instance, including triggering, creating, editing and deleting Workflows (DAGs)
- interacting with the Domino Database

The REST service is written in Python, using the FastAPI framework.

:::tip
You can check the API documentation when running domino going to the REST API URL `/docs`   
(e.g. `http://localhost/api/docs`).
:::

### Rest Schema
![Domino Classes Diagram](/img/domino_components/rest/domino-rest.png)