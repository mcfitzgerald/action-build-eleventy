# Build a static site using 11ty

This actions builds a static site using 11ty (eleventy: https://www.11ty.dev/) from the contents of a repository. It assumes that the repository root is the site source, but this can be configured in the workflow. It is intended to be coupled with other actions in the workflow that push the built site to a cdn or webserver. An example workflow shows how to push the built site to google storage.

The default build directory is the ```$GITHUB_WORKSPACE``` instantiated when using ```actions/checkout```.

```yaml
name: "build-site"
on:
  push:
    branches:
      - master

jobs:
  build: # run 11ty
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: mcfitzgerald/action-build-eleventy@master
      with:
        path: $GITHUB_WORKSPACE
    - uses: GoogleCloudPlatform/github-actions/setup-gcloud@master
      with:
        service_account_key: ${{ secrets.GCE_SA_KEY }}
    - run: |
       gcloud config set project ${{ secrets.GCE_PROJECT }}
       gsutil rsync -r $GITHUB_WORKSPACE/_site ${{ secrets.GS_BUCKET }}

```

While I wrote the action, the project template is a complete rip from the template made available at: https://github.com/actions/typescript-action.git.

The build-test workflow is accurate and tests whether or not 11ty tries to build this action's repo. The test in `__tests__` is a dummy.  
