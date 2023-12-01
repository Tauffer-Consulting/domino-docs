---
sidebar_position: 3
---

# Create Pieces

Domino defines standards for writing and distributing modular Pieces, which guarantees their reusability and consistency across Workflows. Those Pieces can be included in any Workflow by drag-and-drop, and Domino will take care of running them according to user choices.

It is very easy to turn your Python code into a Domino Piece, in this session we'll guide you through it, step by step:

1. write your Python function inside the [piece.py](./create_pieces#piecepy) file
2. define its data types inside the [models.py](./create_pieces#modelspy) file
3. define extra metadata options inside the [metadata.json](./create_pieces#metadatajson) file
4. write tests for your Piece inside the [test_mynewpiece.py](./create_pieces#test_mynewpiecepy) file
5. define its [dependencies](./pieces_repository#dependencies)
6. publish it in a [git repository](./create_pieces#add-the-piece-to-a-repository) (public or private)


Let's create a new Piece, named `MyNewPiece`. The Piece's folder should have the same name as the Piece (in this case `MyNewPiece`) and follow a standard organization:

```bash title="Example folder and files structure for MyNewPiece"
/MyNewPiece
..../metadata.json
..../models.py
..../piece.py
..../test_mynewpiece.py
```

## piece.py

The `piece.py` file should contain your custom code inside the `piece_function` method. The class for the Piece we're writing is defined here, and it should inherit from Domino `BasePiece`. Example:

:::caution
The class name should match the Piece's folder name, in this case `MyNewPiece`.
:::

```python
from domino.base_piece import BasePiece
from .models import InputModel, SecretsModel, OutputModel
from pathlib import Path

class MyNewPiece(BasePiece):

    # Your custom function code comes in here
    def piece_function(self, input_data: InputModel, secrets_data: SecretsModel):

        # The Piece's input arguments are passed in the 'input_data' argument
        print(f"Inpu argument 1: {input_data.in_argument_1}")
        print(f"Inpu argument 2: {input_data.in_argument_2}")
        print(f"Inpu argument 3: {input_data.in_argument_3}")

        # The Piece's secrets are passed in the 'secrets_data' argument
        print(f"Secret variable: {secrets_data.SECRET_VAR}")

        # If you want to save files in a shared storage, to be used by other Pieces,
        # you should save them under self.results_path
        msg = "This is a text to be saved in a shared storage, to be read by other Pieces!"
        file_path = str(Path(self.results_path)/"msg.txt")
        with open(file_path, "w") as f:
            f.write(msg)

        # If you want to display results directly in the Domino GUI,
        # you should set the attribute self.display_result
        self.display_result = {
            "file_type": "txt",
            "file_path": file_path
        }

        # You should return the results using the Output model
        return OutputModel(
            out_argument_1="a string result",
            out_file_path=file_path
        )
```

<details>
<summary>Save files in a shared storage</summary>


Pieces can save files in a shared storage, to be used as input to downstream Pieces, by saving them under `self.results_path`. The `self.results_path` points to a shared storage path specific for that Piece, and it is automatically created when the Piece is executed.

:::note
Important: To use this feature your workflow should be configured to use a shared storage.
:::


```python
msg = "This is a text to be saved in a shared storage, to be read by other Pieces!"
file_path = str(Path(self.results_path)/"msg.txt")
with open(file_path, "w") as f:
    f.write(msg)
```

Besides saving files under `self.results_path`, to make those files available as input to other Pieces, you should also return the file path in the `OutputModel`:


```python
return OutputModel(
    out_argument_1="a string result",
    out_file_path=file_path
)
```

</details>


<details>
<summary>Display results in the Domino GUI</summary>


Pieces can display results directly in the Domino GUI, by setting the attribute `self.display_result` in one of two ways:

1. Saving the result in a file, and passing the file path to the `self.display_result` attribute:


```python
self.display_result = {
    "file_type": "txt",
    "file_path": file_path
}
```


2. Passing the result content directly to the `self.display_result` attribute as a base64 encoded string:


```python
self.display_result = {
    "file_type": "txt",
    "base64_content": base64-encoded-string,
}
```

In either way, the `file_type` should always be provided. Currently, the supported file types are:

- `txt`
- `json`
- `png`
- `jpeg`
- `bmp`
- `tiff`
- `gif`
- `svg`
- `md`
- `pdf`
- `html`
- `plotly_json`

</details>


<details>
<summary>Display Logs</summary>

Domino `BasePiece` class has a built in logger property.
You can use it to log messages to the Domino GUI using the following:

```python
self.logger.info("This is an info message")
```

</details>


## models.py

The `models.py` file contains the data models for the Input, Output and Secrets arguments of the Piece. Those should be defined as Pydantic models. Example:

```python
from pydantic import BaseModel, Field

class InputModel(BaseModel):
    """MyNewPiece Input"""
    in_argument_1: float = Field(
        default=1.,
        description="an argument of numeric type with default value",
    )
    in_argument_2: str = Field(
        description="a required argument of string type"
    )
    in_argument_3: bool = Field(
        description="a required argument of boolean type"
    )

class OutputModel(BaseModel):
    """MyNewPiece Output"""
    out_argument_1: str = Field(
        description="an argument of string type"
    )
    out_file_path: str = Field(
        description="The path to a file saved in a shared storage"
    )

class SecretsModel(BaseModel):
    """MyNewPiece Secrets"""
    SECRET_VAR: str = Field(
        description="Secret variable"
    )
```

Pydantic models are very powerful and rich in features. Using them properly will guarantee that your Piece will always be called with the correct input data types and that downstream Pieces will be able to use its output data as well. We can easily add informative descriptions, validation rules (e.g. regex for string type, min/max for numeric types) and make arguments required/optional using Pydantic models.

Based on the `InputModel`, the Domino GUI will appropriately display input fields in the forms, based on their respective data types:


<details>
<summary>Integer</summary>

```python
integer_arg: int = Field(
    default=2,
    description="Example of integer input argument"
)
```

![Form integer field](/img/pieces/create_pieces/input_int.gif)

</details>


<details>
<summary>Float</summary>

```python
float_arg: float = Field(
    default=1.3,
    description="Example of float input argument"
)
```

![Form float field](/img/pieces/create_pieces/input_float.gif)

</details>


<details>
<summary>Text</summary>

```python
string_arg: str = Field(
    default="text value",
    description="Example of string input argument"
)
```

![Form text field](/img/pieces/create_pieces/input_text.gif)

</details>


<details>
<summary>Boolean</summary>

```python
boolean_arg: bool = Field(
    default=True,
    description="Example of boolean input argument"
)
```

![Form boolean field](/img/pieces/create_pieces/input_boolean.gif)

</details>


<details>
<summary>Enum</summary>

You must first create an `Enum` class with its corresponding options in the `models.py`, then use this class as a type.

```python
from enum import Enum

class EnumType(str, Enum):
    option_1 = "option_1"
    option_2 = "option_2"
    option_3 = "option_3"

enum_arg: EnumType = Field(
    default=EnumType.option_1,
    description="Example of enum input argument"
)
```

![Form enum field](/img/pieces/create_pieces/input_enum.gif)

</details>


<details>
<summary>Simple Array</summary>

```python
input_array: List[str] = Field(
    default=["default_1", "default_2", "default_3"],
    description='Input array to be logged.'
)
```

![Form array field](/img/pieces/create_pieces/input_array.gif)

</details>

<details>
<summary>Object Array</summary>

For Object Arrays you need define the basic model first, and use this model in a array as usual. Each element of this object can be configured as from_upstream `never` | `always` | `allowed`

```python
from pydantic import BaseModel, Field
from typing import List

class InputModel(BaseModel):
    item_1: str = Field(
        default=None,
        description='Argument name.',
        from_upstream="never"
    )
    item_2: str = Field(
        default=None,
        description='Argument value.',
        from_upstream="always"
    )
```

```python

input_args: List[InputModel] = Field(
        default=[
            InputModel(item_1="", item_2="default_1"),
            InputModel(item_1="", item_2="default_2"),
        ],
        description='Input arguments.',
        from_upstream="never"
    )
```

![Form object array field](/img/pieces/create_pieces/input_object_array.gif)

</details>


The `OutputModel` defines the output data types of the Piece and allows for connected downstream Pieces to use this output data correctly.

The `SecretsModel` defines the secret variables that should be available to the Piece function. It is important to note that Secrets arguments names should be unique within the same Pieces repository. If the same name is used for more than one Secret argument in the same repository, Domino presumes that both Pieces are using the same secret value (e.g. the same access token to an external service).


## metadata.json

The simplest `metadata.json` file should contain basic metadata related to the Piece:

```json title="Example of basic metadata.json"
{
    "name": "MyNewPiece",
    "description": "This Piece runs my awesome Python function, in any Workflow!",
    "dependency": {
        "requirements_file": "requirements_0.txt"

}
```

The `name` field is the official Piece's name and it should match the name of the folder and of the class.
The `description` field should contain a short and useful description of your Piece.
The `dependency` field contains the reference to a dependencies file that is required to run your custom code. It can contain either:

- `requirements_file`, with the name of a Python requirements file.
- `dockerfile`, with the name of a Dockerfile with instructions to build the Docker image serving this Piece

The dependency files are stored in a separate folder inside the [Pieces repository](./pieces_repository).

Optionally, you can also include in the metadata:

- style configurations for the visual node representing `MyNewPiece` in the Domino GUI, such as label and icon. Currently the available icons are the free options from [Font Awesome v5](https://fontawesome.com/v5/search?m=free).
- minimal and limit resources required to run the Piece, when running Domino in Kubernetes. The units are millicores (m) for CPU and mebibyte (Mi) for memory.
- a list of tags

```json title="Example of extended metadata.json"
{
    "name": "MyNewPiece",
    "description": "This Piece runs my awesome Python function, in any Workflow!",
    "dependency": {
        "requirements_file": "requirements_0.txt"
    },
    "container_resources": {
        "requests": {
            "cpu": 100,
            "memory": 128
        },
        "limits": {
            "cpu": 500,
            "memory": 512
        }
    },
    "style": {
        "node_label": "My awesome Piece",
        "icon_class_name": "fas fa-database"
    },
    "tags": [
        "Awesome",
        "New"
    ]
}
```

## test_mynewpiece.py

To guarantee that your Piece is working as expected, you should always write tests for it. You can name the test file as you desire, as long as it starts with `test_` and is unique among the other test files in the same repository, e.g. `test_mynewpiece.py`.

```python title="test_mynewpiece.py"
from domino.testing import piece_dry_run

def test_mynewpiece():
    # Define input and secrets data
    input_data = dict(
        in_argument_1=10.5,
        in_argument_2='test string',
        in_argument_3=True,
    )
    secrets_data = dict(
        SECRET_VAR="secret_value"
    )

    # Dry-run the Piece
    piece_output = piece_dry_run(
        piece_name="MyNewPiece",
        input_data=input_data,
        secrets_data=secrets_data
    )

    # Compare the output with the expected output
    assert piece_output["out_argument_1"] == "a string result"
    assert piece_output["out_argument_2"].split("/")[-1] == "msg.txt"
```

All tests files will be automatically run by the repository's actions before the Pieces production images are released.


## Add the Piece to a repository

Now that you have your new Piece ready, you need to add it to a [Pieces repository](./pieces_repository) so it could be installed in a Domino workspace.
