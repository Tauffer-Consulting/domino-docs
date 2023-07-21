"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[774],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2},o="Create Pieces",s={unversionedId:"pieces/create_pieces",id:"pieces/create_pieces",title:"Create Pieces",description:"Domino defines standards for writing and distributing modular Pieces, which guarantees their reusability and consistency across Workflows. Those Pieces can be included in any Workflow by drag-and-drop, and Domino will take care of running them according to user choices.",source:"@site/docs/pieces/create_pieces.md",sourceDirName:"pieces",slug:"/pieces/create_pieces",permalink:"/domino-docs/docs/pieces/create_pieces",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pieces/create_pieces.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pieces",permalink:"/domino-docs/docs/pieces/pieces_basics"},next:{title:"Pieces repository",permalink:"/domino-docs/docs/pieces/pieces_repository"}},l={},p=[{value:"piece.py",id:"piecepy",level:2},{value:"models.py",id:"modelspy",level:2},{value:"metadata.json",id:"metadatajson",level:2},{value:"test_mynewpiece.py",id:"test_mynewpiecepy",level:2},{value:"Add the Piece to a repository",id:"add-the-piece-to-a-repository",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-pieces"},"Create Pieces"),(0,i.kt)("p",null,"Domino defines standards for writing and distributing modular Pieces, which guarantees their reusability and consistency across Workflows. Those Pieces can be included in any Workflow by drag-and-drop, and Domino will take care of running them according to user choices."),(0,i.kt)("p",null,"It is very easy to turn your Python code into a Domino Piece, in this session we'll guide you through it, step by step: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"write your Python function inside the ",(0,i.kt)("a",{parentName:"li",href:"./create_pieces#piecepy"},"piece.py")," file"),(0,i.kt)("li",{parentName:"ol"},"define its data types inside the ",(0,i.kt)("a",{parentName:"li",href:"./create_pieces#modelspy"},"models.py")," file"),(0,i.kt)("li",{parentName:"ol"},"define extra metadata options inside the ",(0,i.kt)("a",{parentName:"li",href:"./create_pieces#metadatajson"},"metadata.json")," file"),(0,i.kt)("li",{parentName:"ol"},"write tests for your Piece inside the ",(0,i.kt)("a",{parentName:"li",href:"./create_pieces#test_mynewpiecepy"},"test_mynewpiece.py")," file"),(0,i.kt)("li",{parentName:"ol"},"define its ",(0,i.kt)("a",{parentName:"li",href:"./pieces_repository#dependencies"},"dependencies")),(0,i.kt)("li",{parentName:"ol"},"publish it in a ",(0,i.kt)("a",{parentName:"li",href:"./create_pieces#add-the-piece-to-a-repository"},"git repository")," (public or private)")),(0,i.kt)("p",null,"Let's create a new Piece, named ",(0,i.kt)("inlineCode",{parentName:"p"},"MyNewPiece"),". The Piece's folder should have the same name as the Piece (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"MyNewPiece"),") and follow a standard organization: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example folder and files structure for MyNewPiece"',title:'"Example',folder:!0,and:!0,files:!0,structure:!0,for:!0,'MyNewPiece"':!0},"/MyNewPiece\n..../metadata.json\n..../models.py\n..../piece.py\n..../test_mynewpiece.py\n")),(0,i.kt)("h2",{id:"piecepy"},"piece.py"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"piece.py")," file should contain your custom code inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"piece_function")," method. The class for the Piece we're writing is defined here, and it should inherit from Domino ",(0,i.kt)("inlineCode",{parentName:"p"},"BasePiece"),". Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from domino.base_piece import BasePiece\nfrom .models import InputModel, SecretsModel, OutputModel\nfrom pathlib import Path\n\nclass MyNewPiece(BasePiece):\n\n    # Your custom function code comes in here\n    def piece_function(self, input_data: InputModel, secrets_data: SecretsModel):\n        \n        # The Piece\'s input arguments are passed in the \'input_data\' argument\n        print(f"Inpu argument 1: {input_data.in_argument_1}")\n        print(f"Inpu argument 2: {input_data.in_argument_2}")\n        print(f"Inpu argument 3: {input_data.in_argument_3}")\n\n        # The Piece\'s secrets are passed in the \'secrets_data\' argument\n        print(f"Secret variable: {secrets_data.SECRET_VAR}")\n\n        # If you want to save files in a shared storage, to be used by other Pieces,\n        # you should save them under self.results_path\n        msg = "This is a text to be saved in a shared storage, to be read by other Pieces!"\n        file_path = str(Path(self.results_path)/"msg.txt")\n        with open(file_path, "w") as f:\n            f.write(msg)\n        \n        # If you want to display results directly in the Domino GUI,\n        # you should set the attribute self.display_result\n        self.display_result = {\n            "file_type": "txt",\n            "file_path": file_path\n        }\n        \n        # You should return the results using the Output model\n        return OutputModel(\n            out_argument_1="a string result",\n            out_file_path=file_path\n        )\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Save files in a shared storage"),(0,i.kt)("p",null,"Pieces can save files in a shared storage, to be used as input to downstream Pieces, by saving them under ",(0,i.kt)("inlineCode",{parentName:"p"},"self.results_path"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"self.results_path")," points to a shared storage path specific for that Piece, and it is automatically created when the Piece is executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'msg = "This is a text to be saved in a shared storage, to be read by other Pieces!"\nfile_path = str(Path(self.results_path)/"msg.txt")\nwith open(file_path, "w") as f:\n    f.write(msg)\n')),(0,i.kt)("p",null,"Besides saving files under ",(0,i.kt)("inlineCode",{parentName:"p"},"self.results_path"),", to make those files available as input to other Pieces, you should also return the file path in the ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputModel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'return OutputModel(\n    out_argument_1="a string result",\n    out_file_path=file_path\n)\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Display results in the Domino GUI"),(0,i.kt)("p",null,"Pieces can display results directly in the Domino GUI, by setting the attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"self.display_result")," in one of two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Saving the result in a file, and passing the file path to the ",(0,i.kt)("inlineCode",{parentName:"li"},"self.display_result")," attribute:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'self.display_result = {\n    "file_type": "txt",\n    "file_path": file_path\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Passing the result content directly to the ",(0,i.kt)("inlineCode",{parentName:"li"},"self.display_result")," attribute as a base64 encoded string:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'self.display_result = {\n    "file_type": "txt",\n    "base64_content": base64-encoded-string,\n}\n')),(0,i.kt)("p",null,"In either way, the ",(0,i.kt)("inlineCode",{parentName:"p"},"file_type")," should always be provided. Currently, the supported file types are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txt")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"png")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jpeg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bmp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tiff")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gif")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"svg")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"md")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"html")))),(0,i.kt)("h2",{id:"modelspy"},"models.py"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"models.py")," file contains the data models for the Input, Output and Secrets arguments of the Piece. Those should be defined as Pydantic models. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field\n\nclass InputModel(BaseModel):\n    """MyNewPiece Input"""\n    in_argument_1: float = Field(\n        default=1.,\n        description="an argument of numeric type with default value",\n    )\n    in_argument_2: str = Field(\n        description="a required argument of string type"\n    )\n    in_argument_3: bool = Field(\n        description="a required argument of boolean type"\n    )\n\nclass OutputModel(BaseModel):\n    """MyNewPiece Output"""\n    out_argument_1: str = Field(\n        description="an argument of string type"\n    )\n    out_file_path: str = Field(\n        description="The path to a file saved in a shared storage"\n    )\n\nclass SecretsModel(BaseModel):\n    """MyNewPiece Secrets"""\n    SECRET_VAR: str = Field(\n        description="Secret variable"\n    )\n')),(0,i.kt)("p",null,"Pydantic models are very powerful and rich in features. Using them properly will guarantee that your Piece will always be called with the correct input data types and that downstream Pieces will be able to use its output data as well. We can easily add informative descriptions, validation rules (e.g. regex for string type, min/max for numeric types) and make arguments required/optional using Pydantic models."),(0,i.kt)("p",null,"Based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"InputModel"),", the Domino GUI will appropriately display input fields in the forms, based on their respective data types:"),(0,i.kt)("p",null,".. collapse:: Integer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'.. code-block:: python\n    \n    integer_arg: int = Field(\n        default=2,\n        description="Example of integer input argument"\n    )\n\n.. image:: /_static/media/int_field.gif\n    :width: 350\n')),(0,i.kt)("p",null,".. collapse:: Float"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'.. code-block:: python\n    \n    float_arg: float = Field(\n        default=1.3,\n        description="Example of float input argument"\n    )\n\n.. image:: /_static/media/float_field.gif\n')),(0,i.kt)("p",null,".. collapse:: Text: single line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'.. code-block:: python\n    \n    string_arg: str = Field(\n        default="text value",\n        description="Example of string input argument"\n    )\n\n.. image:: /_static/media/text_field.gif\n')),(0,i.kt)("p",null,".. collapse:: Boolean"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'.. code-block:: python\n    \n    boolean_arg: bool = Field(\n        default=True,\n        description="Example of boolean input argument"\n    )\n\n.. image:: /_static/media/boolean_field.gif\n')),(0,i.kt)("p",null,".. collapse:: Enum"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'You must first create an `Enum` class with its corresponding options in the `models.py`, then use this class as a type.\n\n.. code-block:: python\n    \n    from enum import Enum\n\n    class EnumType(str, Enum):\n        option_1 = "option_1"\n        option_2 = "option_2"\n    \n    enum_arg: EnumType = Field(\n        default=EnumType.option_1,\n        description="Example of enum input argument"\n    )\n\n.. image:: /_static/media/enum_field.gif\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputModel")," defines the output data types of the Piece and allows for connected downstream Pieces to use this output data correctly. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SecretsModel")," defines the secret variables that should be available to the Piece function. It is important to note that Secrets arguments names should be unique within the same Pieces repository. If the same name is used for more than one Secret argument in the same repository, Domino presumes that both Pieces are using the same secret value (e.g. the same access token to an external service)."),(0,i.kt)("h2",{id:"metadatajson"},"metadata.json"),(0,i.kt)("p",null,"The simplest ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.json")," file should contain basic metadata related to the Piece:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of basic metadata.json"',title:'"Example',of:!0,basic:!0,'metadata.json"':!0},'{\n    "name": "MyNewPiece",\n    "description": "This Piece runs my awesome Python function, in any Workflow!",\n    "dependency": {\n        "requirements_file": "requirements_0.txt"\n    \n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," field is the official Piece's name and it should match the name of the folder and of the class.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," field should contain a short and useful description of your Piece.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"dependency")," field contains the reference to a dependencies file that is required to run your custom code. It can contain either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requirements_file"),", with the name of a Python requirements file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dockerfile"),", with the name of a Dockerfile with instructions to build the Docker image serving this Piece")),(0,i.kt)("p",null,"The dependency files are stored in a separate folder inside the ",(0,i.kt)("a",{parentName:"p",href:"./pieces_repository"},"Pieces repository"),"."),(0,i.kt)("p",null,"Optionally, you can also include in the metadata: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"style configurations for the visual node representing ",(0,i.kt)("inlineCode",{parentName:"li"},"MyNewPiece")," in the Domino GUI, such as label and icon. Currently the available icons are the free options from ",(0,i.kt)("a",{parentName:"li",href:"https://fontawesome.com/v5/search?m=free"},"Font Awesome v5"),"."),(0,i.kt)("li",{parentName:"ul"},"minimal and limit resources required to run the Piece, when running Domino in Kubernetes"),(0,i.kt)("li",{parentName:"ul"},"a list of tags")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example of extended metadata.json"',title:'"Example',of:!0,extended:!0,'metadata.json"':!0},'{\n    "name": "MyNewPiece",\n    "description": "This Piece runs my awesome Python function, in any Workflow!",\n    "dependency": {\n        "requirements_file": "requirements_0.txt"\n    },\n    "container_resources": {\n        "requests": {\n            "cpu": "100m",\n            "memory": "128Mi"\n        },\n        "limits": {\n            "cpu": "500m",\n            "memory": "512Mi"\n        }\n    },\n    "style": {\n        "node_label": "My awesome Piece",\n        "icon_class_name": "fas fa-database"\n    },\n    "tags": [\n        "Awesome",\n        "New"\n    ]\n}\n')),(0,i.kt)("h2",{id:"test_mynewpiecepy"},"test_mynewpiece.py"),(0,i.kt)("p",null,"To guarantee that your Piece is working as expected, you should always write tests for it. You can name the test file as you desire, as long as it starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"test_")," and is unique among the other test files in the same repository, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"test_mynewpiece.py"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="test_mynewpiece.py"',title:'"test_mynewpiece.py"'},'from domino.testing import piece_dry_run\n\ndef test_mynewpiece():\n    # Define input and secrets data\n    input_data = dict(\n        in_argument_1=10.5,\n        in_argument_2=\'test string\',\n        in_argument_3=True,\n    )\n    secrets_data = dict(\n        SECRET_VAR="secret_value"\n    )\n\n    # Dry-run the Piece\n    piece_output = piece_dry_run(\n        piece_name="MyNewPiece",\n        input_data=input_data,\n        secrets_data=secrets_data\n    )\n\n    # Compare the output with the expected output\n    assert piece_output["out_argument_1"] == "a string result"\n    assert piece_output["out_argument_2"].split("/")[-1] == "msg.txt"\n')),(0,i.kt)("p",null,"All tests files will be automatically run by the repository's actions before the Pieces production images are released."),(0,i.kt)("h2",{id:"add-the-piece-to-a-repository"},"Add the Piece to a repository"),(0,i.kt)("p",null,"Now that you have your new Piece ready, you need to add it to a ",(0,i.kt)("a",{parentName:"p",href:"./pieces_repository"},"Pieces repository")," so it could be installed in a Domino workspace."))}c.isMDXComponent=!0}}]);