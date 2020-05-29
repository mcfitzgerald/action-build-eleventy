# Build a static site using 11ty

This action will run 11ty on a directory of your choice. The default directory is the ```$GITHUB_WORKSPACE``` instantiated when using ```actions/checkout```

The action is not much good on its own as it builds the site on an ephemeral runner. It is intended be used in a workflow that also handles shipping the built site to web server or CDN.

```yaml
pea:
gasd

```

While I wrote the action, the project template is a complete rip from the template made available at: https://github.com/actions/typescript-action.git

The build-test workflow is accurate and tests whether or not 11ty tries to build this action's repo. The test ins __tests__ is a dummy.  

