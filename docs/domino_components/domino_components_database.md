---
sidebar_position: 3
---

# Domino Database
Domino database is a PostgreSQL database. It is used by the Domino API to store and retrieve information domino specific resources. These resources include:
- Users
- Workspaces
- Piece Repositories
- Secrets
- Pieces
- Workflows

Other information rather than Domino specific is stored in the Airflow database but you don't need to interact with it directly, our **REST API** will do it for you.


### Database Schema
![Domino Classes Diagram](/img/domino_components/database/domino-db-diagram.png)
