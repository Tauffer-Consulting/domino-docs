# Permissions

Within a workspace, users can have the following permissions: `owner`, `admin`, `write` and `read`. Permissions are a means of controlling and regulating access to specific functions at the system level.

## Read

  * can see workspace pieces
  * can see workflows runs
  * can see workflows results

## Write

All `read` permissions and:

* can create workflow
* can remove workflow
* can trigger workflow manually (if the workflow are active)
  
## Admin 

All `read` and `write` permissions and:

* can invite/remove users (except for admins and owner)
* can create/remove workflows
* can trigger workflow manually
* can add/edit/remove secrets
* can add/edit/remove pieces
* 
## Owner 

Unique per workspace.

All `read`, `write` and `admin` permissions and:

* can delete the workspace
* can invite/remove users (including admins)
