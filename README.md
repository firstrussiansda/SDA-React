# SDA-React

React site for First Russian SDA Church in NYC

## To run:

- `yarn` - run first to install all needed packages
- `yarn dev` - starts the project on port 3000 with auto page refresh on saved change
- `yarn build` - generate a production build bundle
- `yarn start` - start the project form a build generated with `yarn build`
- `yarn lint` - to run linting check and fix what's possible
- `yarn lint:no-fix` - to run linting check and DON'T fix


## Project structure

- `/legacy` folder contains the initial HTML static project which is to be used for copying HTML into the new React app

## Git workflow

- clone the current repo
- create a feature branch with a corresponding name
- push you local branch to GitHub
- open a PR to master when feature is completed
- PR to be rewieved by a code owner before merge is allowed

## Pre-commit

Lint rules can be checked at commit-time via:

```bash
$ python3 -m pip install pre-commit
$ pre-commit install
```

## APIs

### `/api/images`

Return latest images from instagram account

#### Query

- count - number of images (default - 12)

- max_id - id returned form the previous call - get more images after the last one from the previous call
