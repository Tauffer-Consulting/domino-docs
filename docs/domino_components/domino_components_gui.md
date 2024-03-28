---
sidebar_position: 1
---

# Domino GUI

The Domino frontend service is a React application that provides the GUI for easily creating, editing and monitoring Workflows. Here are some of its features:


<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Sign up and login</strong>
    </summary>
    Sign up and login to use the Domino platform.
    <br/><br/>

![Sign-up](/img/domino_components/gui/signup.gif)

</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Create your workspace</strong>
    </summary>
    Create a new workspace and add your github access token.
    Workspaces are isolated environments where you can create and run workflows.
    <br/><br/>

![Create-workspace](/img/domino_components/gui/create-workspace.gif)
</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Invite an user to your workspace</strong>
    </summary>
    In Domino UI you can create different workspaces and invite other users to collaborate with you.
    For each workspace you can select the users that will have access to it and the pieces repositories you want to install on it.
    <br/>
    You can provide different access levels to the users of your workspace:
    <ul>
        <li> <span style={{fontWeight: 'bold'}}>Admin:</span> can invite other users and remove them from the workspace, create and run workflows, install pieces and edit secrets.</li>
        <li> <span style={{fontWeight: 'bold'}}>Write:</span> can create and run workflows.</li>
        <li> <span style={{fontWeight: 'bold'}}>Read:</span> can only see the workflows runs and their logs.</li>
    </ul>
    <br/><br/>


![Invite User](/img/domino_components/gui/invite-to-workspace.gif)

</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Accept/Reject workspace invites</strong>
    </summary>
    When you are invited to a workspace, you will see the workspace invite in the workspaces page.
    You can accept or reject an invite.
    <br/><br/>

![Accept Invite](/img/domino_components/gui/accept-invite.gif)

</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Remove an user from workspace</strong>
    </summary>
    If you are the owner or admin of a workspace, you can remove an user from it.
    <br/><br/>

![Remove user](/img/domino_components/gui/remove-user-from-workspace.gif)

<br/>
If you are not the owner, you can leave the workspace by yourself.
<br/><br/>

![Leaving Workspace](/img/domino_components/gui/leaving-workspace.gif)

</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Install Pieces repositories</strong>
    </summary>
    Install bundles of Pieces to your Domino Workspaces direclty from Github repositories, and use them in your Workflows.
    <br/><br/>

![Add Pieces](/img/domino_components/gui/add-pieces-to-workspace.gif)
</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Create Workflows</strong>
    </summary>
    Create Workflows by dragging and dropping Pieces to the canvas, and connecting them.
    <br/><br/>

![Domino create workflow](/img/intro/create-workflow.gif)
</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Edit Pieces</strong>
    </summary>
    Edit Pieces by changing their input. Outputs from upstream Pieces are automatically available as inputs for downstream Pieces. Pieces can pass forward any type of data, from simple strings to heavy files, all automatically handled by Domino shared storage system.
    <br/><br/>

![Upstream Value](/img/domino_components/gui/upstream-value.gif)
</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Edit and schedule Workflows</strong>
    </summary>
    Schedule Workflows to run periodically, at a specific date/time, or trigger them manually, and select the the shared storage service.
    <br/><br/>

![Settings workflow](/img/domino_components/gui/settings-workflow.gif)
</details>

<br/>

<details style={{"background-color": "transparent"}}>
    <summary>
        <strong>Monitor Workflows</strong>
    </summary>
    Monitor Workflows in real time, including the status of each Piece, the logs and results of each run.
    <br/><br/>

![Run Workflow](/img/domino_components/gui/run-workflow.gif)
</details>

<br/>