"use strict";(self.webpackChunkdomino_docs=self.webpackChunkdomino_docs||[]).push([[5894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"workflow-example-podcast-digest","metadata":{"permalink":"/blog/workflow-example-podcast-digest","source":"@site/blog/2023-12-13-workflow-example-podcast-digest/index.mdx","title":"Build your own podcast digest service with Domino","description":"Domino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.","date":"2023-12-13T00:00:00.000Z","formattedDate":"December 13, 2023","tags":[{"label":"domino","permalink":"/blog/tags/domino"},{"label":"data","permalink":"/blog/tags/data"},{"label":"ai","permalink":"/blog/tags/ai"},{"label":"workflows","permalink":"/blog/tags/workflows"},{"label":"airflow","permalink":"/blog/tags/airflow"},{"label":"llm","permalink":"/blog/tags/llm"},{"label":"speech-recognition","permalink":"/blog/tags/speech-recognition"},{"label":"youtube","permalink":"/blog/tags/youtube"},{"label":"email","permalink":"/blog/tags/email"}],"readingTime":4.855,"hasTruncateMarker":true,"authors":[{"name":"Luiz Tauffer","title":"Creator and Maintainer of Domino","url":"https://github.com/luiztauffer","imageURL":"https://github.com/luiztauffer.png","key":"luiz"},{"name":"Vin\xedcius Vaz","title":"Maintainer of Domino","url":"https://github.com/vinicvaz","imageURL":"https://github.com/vinicvaz.png","key":"vinicius"}],"frontMatter":{"slug":"workflow-example-podcast-digest","title":"Build your own podcast digest service with Domino","description":"Domino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.","authors":["luiz","vinicius"],"tags":["domino","data","ai","workflows","airflow","llm","speech-recognition","youtube","email"],"image":"./illustration.png"},"nextItem":{"title":"Introducing Domino","permalink":"/blog/introducing-domino"}},"content":"import { Icon } from \'@iconify/react\'\\n\\n\\n:::note **Summary**\\nDomino helps you build creative workflows using data and AI. In this post, we will learn how to combine Youtube, Speech Recognition models and LLMs Pieces in Domino to create your own personalized podcast digest service.\\n:::\\n\\n![Build a podcast digest workflow with Domino](./illustration.png)\\n\\n\x3c!--truncate--\x3e\\n\\n\\nIn a world saturated with information, keeping track of your diverse interests can be daunting. Take podcasts for example: the sheer volume of content produced daily can be so overwhelming that it becomes tough to filter out channels and episodes that will truly captivate you. Now, picture waking up to a personalized podcasts digest every morning, to enjoy while you savor your breakfast. Gone are the days of endless scrolling and sifting through episodes, instead, you\'re greeted with a tailored digest ready to assist in selecting the perfect episode to start your day.\\n\\nThat\'s what we\'ll build today with Domino!\\n\\n## Building a podcast digest workflow\\nDomino allows you to combine a wide variety of data processing algorithms to build your own customized solutions. To create a podcast digest workflow with Domino, we can use the following Pieces:\\n\\n- **YouTube List Videos**: Retrieves a list of available videos from a designated YouTube channel.\\n- **Get Item From Array**: Extracts the one item from a list. In this case, we\u2019ll get the most recent video.\\n- **YouTube Download Piece**: Downloads the YouTube video as an MP3 file.\\n- **OpenAI Audio Transcript**: Transcribes audio to text using the OpenAI API.\\n- (alternatively) **Audio Transcription Local**: Transcribes audio to text using a local open speech-to-text model.\\n- **Text Summarizer**: Condenses the transcription into a concise and informative summary, utilizing the OpenAI API.\\n- (alternatively) **Text Summarizer Local**: Condenses the transcription into a concise and informative summary, using a local open Large Language Model (LLM).\\n- **Email Sender**: Sends the resulting podcast summary to a specified list of email addresses.\\n\\nSome of these Pieces might not come installed by default in your Domino workspace. If that\'s the case, you can install them by following the steps described in the [**Install Pieces repositories**](../docs/settings/installing_repositories) session.\\n\\nCheck out our tutorial video showing how to create this workflow, using the OpenAI API service:\\n\\n<iframe width=\\"100%\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/u7S3LrrRe7A?si=cP5VZ4aova4c7Qpn\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n\\n\\n## Using local algorithms\\nUnlike other workflow management platforms, Domino is more than just an API connector. Domino\'s pieces can handle various types of processing, ranging from light tasks such as API requests to more compute intensive tasks such as local artificial intelligence models. The resource allocation for each piece can be defined in the workflow creation through the Advanced Options tab in the piece\'s form.\\n\\nThe capability to provision local (non-API) data processing is crucial for many applications, and essential for companies prioritizing critical aspects such as data security, cost efficiency, the ability to implement custom code, including custom machine learning models, and overall a more fine-grained control over their workflows.\\n\\n- **Data Security**: By utilizing local algorithms, businesses can confidently retain their data within their infrastructure, eliminating the risk of exposing sensitive information with external APIs.\\n- **Custom Solutions**: Imagine your data science team has developed a proprietary machine learning model tailored precisely to your business problem, and its privacy is paramount. With Domino\u2019s pieces development framework it is easy to encapsulate this model as a Piece to be used by anyone on your team through Domino\'s UI. This allows organizations to leverage their specialized solutions securely, guaranteeing that any proprietary solutions can be utilized efficiently within Domino\'s platform.\\n- **Control over Operations**: Being an open-source solution, Domino offers the advantage of being self-hostable on your internal infrastructure. This ensures that you retain complete ownership and control over your data, code and workflows. This level of independence is invaluable, especially for entities operating under stringent regulatory frameworks or internal policies.\\n- **Cost-Efficiency**: In certain circumstances, running algorithms locally can be more economical and faster than relying on external servers. This is the case, for example, when companies have idle computing capacity ready to be used.\\n\\nWe can illustrate how seamless it is to switch between external API services to local algorithms, using the same podcast digest workflow. We can substitute the OpenAI Audio Transcript Piece for a local version of the [Whisper model](https://huggingface.co/openai/whisper-base) for audio transcription. Similarly, at the summarization step, we can substitute the OpenAI API service for a local [BART model](https://huggingface.co/facebook/bart-large), a popular open LLM for text summarization.\\n\\nCheck out our tutorial video showing how to create this workflow, using the open LLMs:\\n\\n<iframe width=\\"100%\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/10HjaaO35Mk?si=r4A4-tf6jXU5gfjV\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>\\n\\n\\n## Conclusion\\nDomino\u2019s adaptability empowers users to tailor their workflow creation process according to their specific preferences and requirements, mix-and-matching external API services with internal code as needed. Domino has an open model for production of Pieces, which encourages distribution and collaboration. Find the Pieces used in this example and many others in the [**Pieces Gallery**](../gallery).\\n\\nDomino workflows, no matter how complex, are reusable: easy to import, export and share. You can also import these and other example workflows directly from the workflows gallery, in the Workflow Editor. See how in our [**Quickstart**](../docs/quickstart) guide.\\n\\nTry Domino out today!\\n\\n<a\\n    href=\\"https://github.com/Tauffer-Consulting/domino\\"\\n    style={{\\n        display: \'flex\',\\n        alignItems: \'center\',\\n        textDecoration: \'none\',\\n        fontSize: \'16px\',\\n        textDecoration: \'none\',\\n        marginBottom: \'10px\'\\n    }}\\n>\\n    <Icon icon=\\"mdi:github\\" width=\\"40\\" style={{ marginRight: \'10px\' }} />\\n    Domino source code on GitHub\\n</a>\\n\\n<a\\n    href=\\"https://domino-workflows.io/docs/intro\\"\\n    style={{\\n        display: \'flex\',\\n        alignItems: \'center\',\\n        textDecoration: \'none\',\\n        fontSize: \'16px\',\\n        textDecoration: \'none\',\\n        marginBottom: \'10px\'\\n    }}\\n>\\n    <Icon icon=\\"iconoir:google-docs\\" width=\\"40\\" style={{ marginRight: \'10px\' }} />\\n    Documentation\\n</a>\\n\\n<br/>\\n\\n> Do you want to incorporate Domino as a visual workflow creation and supervision tool to your business operations, but lack technical personnel well versed in data workflows, Apache Airflow or Kubernetes? [Get in touch with us](https://domino-workflows.io/#contact)!"},{"id":"introducing-domino","metadata":{"permalink":"/blog/introducing-domino","source":"@site/blog/2023-12-01-introduction/index.mdx","title":"Introducing Domino","description":"Domino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.","date":"2023-12-01T00:00:00.000Z","formattedDate":"December 1, 2023","tags":[{"label":"domino","permalink":"/blog/tags/domino"},{"label":"data","permalink":"/blog/tags/data"},{"label":"ai","permalink":"/blog/tags/ai"},{"label":"workflows","permalink":"/blog/tags/workflows"},{"label":"airflow","permalink":"/blog/tags/airflow"}],"readingTime":8.61,"hasTruncateMarker":true,"authors":[{"name":"Luiz Tauffer","title":"Creator and Maintainer of Domino","url":"https://github.com/luiztauffer","imageURL":"https://github.com/luiztauffer.png","key":"luiz"},{"name":"Vin\xedcius Vaz","title":"Maintainer of Domino","url":"https://github.com/vinicvaz","imageURL":"https://github.com/vinicvaz.png","key":"vinicius"}],"frontMatter":{"slug":"introducing-domino","title":"Introducing Domino","description":"Domino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.","authors":["luiz","vinicius"],"tags":["domino","data","ai","workflows","airflow"],"image":"https://raw.githubusercontent.com/Tauffer-Consulting/domino-docs/main/blog/2023-12-01-introduction/domino_introduction.png"},"prevItem":{"title":"Build your own podcast digest service with Domino","permalink":"/blog/workflow-example-podcast-digest"}},"content":"import { Icon } from \'@iconify/react\'\\n\\n\\n:::note **TL-DR:**\\nDomino is a groundbreaking open-source platform dedicated to visually creating and managing data and AI workflows. With its intuitive drag-and-drop graphical interface, anyone can effortlessly construct complex workflows by piecing together cutting-edge modular operations, no coding required! Additionally, Domino gives developers the power to bundle their Python functions into self-containing, reusable, shareable modules, promoting a culture of collaboration, efficiency and reproducibility.\\n:::\\n\\n![Domino - build amazing ideas, piece by piece](./domino_introduction.png)\\n\\n\x3c!--truncate--\x3e\\n\\n## Introduction to Domino (for non-devs)\\nThe world of data and artificial intelligence is continuously evolving at a rapid pace, which can be overwhelming to non-technical individuals to follow. Technologies such as containers and code repositories have certainly democratized these advancements, making them more accessible than ever. Yet, harnessing advanced algorithms from disparate sources to create tailor-made solutions for specific use cases still requires significant coding expertise. Domino comes to change that.\\n\\nDomino brings an intuitive graphical interface, designed to simplify the process of building and managing complex data and AI workflows. It is as easy as playing with toy blocks! You can literally drag and drop \'Pieces\', as we call them in Domino language, to construct intricate workflows, all without writing a single line of code. No more intimidation by complex coding environments or the need for a deep understanding of programming languages. Domino puts the power of data and AI into your hands, regardless of your technical background.\\n\\nThe modular nature of Pieces allows you to take advantage of complex data and AI operations that have been pre-packaged by experts. Imagine being able to harness the power of advanced algorithms, state-of-the-art machine learning models, or sophisticated data transformation processes, all readily available for you to plug into your workflows. The power of Python functions are now accessible to you in a visual, interactive, and intuitive way.\\n\\nAnd it doesn\'t stop there. Domino\'s GUI-first approach doesn\'t just simplify the creation of workflows. It also provides an intuitive supervision experience, allowing you to visually monitor and manage your workflows in real-time. It\'s like having a dashboard for your data and AI operations, giving you complete visibility and control over your workflows.\\n\\nIf you are a non-technical individual working in a domain that could benefit from leveraging data and AI, Domino is for you. It breaks down the barriers to entry into the world of data and AI, allowing you to implement your ideas effectively and efficiently. With Domino, you don\'t just consume technology - you create with it.\\n\\n## Introduction to Domino (for devs)\\nEver had that euphoric moment when you\'ve just successfully completed a complex data workflow project? After many hours spent crafting functions, meticulously documenting them, ensuring robust error handling, and striving for efficiency, you can finally take a breather and enjoy the satisfaction of your accomplishment. But in the aftermath, you may find yourself pondering:\\n\\n> \\"If only I could encapsulate these functions as neat modules on my screen, then just drag and drop them whenever I want to use them in future...\\"\\n\\nIf you\'ve worked with data science, machine learning or a related field, this scenario is likely a familiar one. Well, guess what? Now you can! Domino offers the capability to transform any Python code into modular Pieces that can be seamlessly arranged within an intuitive graphical interface to create powerful  data workflows.\\n\\nDomino\u2019s innovative approach not only boosts the efficiency of the workflow creation process, but also encourages a collaborative environment. You can package your well-crafted Python functions into a Piece, complete with its unique data model and isolated execution environment, and share it across your organization, or even beyond. Over time, your colleagues and peers can assemble a rich and diverse toolbox of Pieces, each embodying the expertise of different teams, ready to be pieced together in any number of ways.\\n\\nThe underlying design of Domino places a strong emphasis on promoting best practices in open-source code sharing. By creating a standard for creating Pieces - reusable modules of Python functions - it encourages you to think modularly, breaking down complex workflows into simple, manageable components. Each Piece is designed to be self-contained, bundled as a container, ensuring not only its portability across systems but also its consistent execution.\\n\\nA core element of Domino\'s standard is a well-defined data model for each Piece, which clearly outlines the inputs required and outputs generated. This fosters transparency and understanding among users, making it easier to incorporate into existing or new workflows. It\'s also a boon for documentation, as each Piece can come with detailed notes explaining its purpose, the function it carries out, and the data it works with.\\n\\nFurthermore, the Pieces you create can be shared within your organization or published in an open-source repository, inviting contributions and usage from the wider developer community. This approach not only accelerates the spread of innovative solutions and ideas but also enhances the collaborative spirit that is at the heart of open-source culture.\\n\\nDomino provides an optimal framework for developers to adhere to best practices of open source code sharing, promoting modular programming and informative documentation. Domino lets you focus on what you do best: writing effective and efficient code to solve complex problems. It takes care of the orchestration, execution, and scalability, and provides a platform for your work to be leveraged and appreciated by others.\\n\\n## What does Domino do?\\nAt its core, Domino operates as an application on top of Apache Airflow. Domino aims at drastically enhancing the user experience in creating, editing, and monitoring workflows, while still relying on Airflow\u2019s powerful workflow orchestration capabilities. Domino brings the Airflow experience to a whole new level with:\\n\\n- A GUI-first approach in the creation of data and AI workflows\\n- Intuitive and rich workflows supervision panels\\n- The ability to create and distribute plug-and-play modular Pieces\\n\\nLet\'s dive deeper into each of these exciting features.\\n\\n### GUI-first creation of workflows\\nThe journey of creating workflows in Airflow can begin quite straightforwardly, but as the complexity scales up, the task can quickly become intimidating. This is where Domino shines, replacing script-writing with an interactive graphical interface that allows you to build and edit workflows with simple drag-and-drop operations.\\n\\nOn top of that, Domino transcends the language barrier imposed by Airflow\'s Python-writing requirement, thereby empowering even non-developers to tailor data pipelines. Pieces in Domino are interactive nodes that let you manually enter input data and connect output data variables from upstream tasks to input data variables of downstream tasks.\\n\\n![GIF showing the creation of a workflow in Domino](../../static/img/intro/create-workflow.gif)\\n\\nDomino\u2019s graphical interface brings a breath of fresh air to workflows creation, reducing complex coding processes to simple clicks!\\n\\n### Intuitive workflows supervision\\nTired of scourging through a cluttered Airflow UI to find simple information about your dag runs? Domino brings a more streamlined UI experience, with the rich information from Airflow\'s UI, only better organized and easier to navigate. In fact, Domino goes beyond and provides a richer interface for visual inspection of task-level results.\\n\\n\\n### Creation and distribution of plug-and-play modular Pieces\\nPerhaps the most game-changing feature of Domino is its standard for the creation of reusable, modular Pieces. Each Piece is defined by its function and data models, and ships in its isolated and self-contained execution environment, ensuring that dependencies are satisfied and the operations will run safely and consistently upon deployment.\\n\\nWe\'ve reimagined how Airflow tasks are written, adding a layer of abstraction with the help of Pydantic models, Containers, and the KubernetesPodOperator. This modular approach allows you to create atomic components which can be easily configured and shared. The result? Highly reusable and distributable code that others can seamlessly incorporate into their own workflows!\\n\\n\\n## Who can benefit from Domino?\\nAt its heart, Domino is an enabler; it seeks to empower individuals who work with data and AI workflows in any capacity. If you\'ve been yearning for a visual tool for crafting and modifying your workflows, or looking for a streamlined and intuitive way to navigate through your workflows tasks, Domino is just the ticket for you. This innovative tool puts the power of sharing and reusing workflow components at your fingertips, and enables you to grant your clients a degree of autonomy and involvement over the workflows you manage.\\n\\nDomino transcends the boundaries of technical expertise. Regardless of your role - whether you are an infrastructure specialist, a contributing developer, a data science enthusiast, or a business professional, Domino has resources and tools tailored for your needs. The platform is designed to nurture creativity and collaboration, facilitating the design and supervision of sophisticated data workflows. With Domino transformative approach, you\u2019ll be empowered to explore the full potential of cutting-edge methods in machine learning and data science.\\n\\n## Why is Domino a Game-Changer?\\nHere\'s the real magic of Domino: unlike commercial pipeline builders that limit data processing steps to what their internal software team can develop, Domino encourages the open source community to contribute and share repositories of reusable code. We hope this will allow for a rapid expansion of Pieces within the ecosystem, leveraging the vast array of tools available to the open source community.\\n\\nBeing Kubernetes native, Domino fully supports containerized Operators, allowing functions to ship together with their dependencies. This means they are immutable, ready-to-run, and will operate in an isolated environment, guaranteeing consistency and reproducibility of workflows.\\n\\nIn summary, Domino is a groundbreaking open source, intuitive GUI workflows platform that promotes the creation, distribution, and reuse of modular workflow components. Our aim is to democratize access to complex workflows, and enable anyone to create and manage them with ease. And we are just getting started. Join us in this exciting journey, and contribute to shaping the future of data and AI workflows with Domino. Try it out today!\\n\\n\\n\\n<a\\n    href=\\"https://github.com/Tauffer-Consulting/domino\\"\\n    style={{\\n        display: \'flex\',\\n        alignItems: \'center\',\\n        textDecoration: \'none\',\\n        fontSize: \'16px\',\\n        textDecoration: \'none\',\\n        marginBottom: \'10px\'\\n    }}\\n>\\n    <Icon icon=\\"mdi:github\\" width=\\"40\\" style={{ marginRight: \'10px\' }} />\\n    Domino on GitHub\\n</a>\\n\\n<a\\n    href=\\"https://domino-workflows.io/docs/intro\\"\\n    style={{\\n        display: \'flex\',\\n        alignItems: \'center\',\\n        textDecoration: \'none\',\\n        fontSize: \'16px\',\\n        textDecoration: \'none\',\\n        marginBottom: \'10px\'\\n    }}\\n>\\n    <Icon icon=\\"iconoir:google-docs\\" width=\\"40\\" style={{ marginRight: \'10px\' }} />\\n    Domino\'s documentation\\n</a>\\n\\n<br/>\\n\\n> Do you want to incorporate Domino as a visual workflow creation and supervision tool to your business operations, but lack technical personnel well versed in data workflows, Apache Airflow or Kubernetes? [Get in touch with us](https://domino-workflows.io/#contact)!"}]}')}}]);