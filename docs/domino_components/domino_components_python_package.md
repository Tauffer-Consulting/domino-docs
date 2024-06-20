---
sidebar_position: 4
---

# Domino Python package

The Domino python package brings a collection of convenience classes and functions to work with Domino.

Domino provides 3 different installation options:
```bash
pip install domino-py[cli]     # Domino installation with minimum dependencies (recommended).
pip install domino-py[airflow] # Domino installation with only Airflow dependencies.
pip install domino-py[full]    # Domino installation with all dependencies.
```

:::tip
The recommended installation for most users is
```bash
pip install domino-py[cli]
```
:::


### BasePiece (Domino class)

This is the base class from which every custom Domino Piece should inherit from. It defines the common attributes and methods for all the Domino Pieces.
This is an abstract class that has `piece_function` as an abstract method. This method is the one that will be executed when the Piece run. The `piece_function` method should be implemented in your pieces as shown in [Create Pieces](/pieces/create_pieces.mdx#piecepy).




### Task (Domino class)
This class defines the objects for each task in the AirfLow dag. Once instantiated it will return either a `DominoKubernetesPodOperator` or a `DominoDockerOperator` object, properly configured with the target Piece arguments, secrets and volume mounts.
The `Task` class is the main entry point for the Domino package for each step in a workflow. The Domino task is responsible for setting up the correct Domino Operator based on the identified runtime environment, and passing the correct arguments to this operator.



### DominoKubernetesPodOperator (Domino class)

This class is an extension of the Airflow's `KubernetesPodOperator` class. It adds Domino specific functionalities and information. Runtime information is passed as ENV variables to the container running the target Piece.
The use of this class is automatically determined by the `Task` class based on the environment where Domino is running.


### DominoDockerOperator (Domino class)
This class is an extension of the Airflow's `DockerOperator` class. It adds Domino specific functionalities and information. Runtime information is passed as ENV variables to the container running the target Piece.
The use of this class is automatically determined by the `Task` class based on the environment where Domino is running.


### Diagram
A simplified view of how Domino classes interact with each other is shown in the following diagram:

![Domino Classes Diagram](/img/domino_components/package/domino-package_classes.png)