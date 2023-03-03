# Code10 Coding Challenge - SWAPI

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 14.21.2

# Getting started
- Install dependencies
```
npm install
```
- Build and run the project
```
npm start
```
  Navigate to `http://localhost:2187/status`

## Calling the APIs
Right now, there are three primary APIs, and they are all accessed by making GET requests to the path (e.g. `http://localhost:2187/status`).

| Name | Path | Description |
| - | - | - |
| Classification of all Species in the 1st Episode | `/episode1Species` | We're assuming that by "1st Episode", it is meant "Episode 1, The Phantom Menace". This returns an array of swapi urls for the different species in Episode 1. |
| Starships Related to Luke Skywalker | `/lukesStarships` | This returns an array of swapi urls for the startships Luke piloted.|
| Total Population of all Planets in the Galaxy | `/totalPopulation` | This returns a JSON object with the `total`, known population of the galaxy as reflected in swapi.|
| Status | `/status` | Just a simple endpoint to make sure things work. |

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| - | - |
| **node_modules**      | Contains all  npm dependencies |
| **routes**            | Contains the route files |
| **tests**             | Contains the jest test files |
| **utils**             | Contains helper utilities |
| **src**/app.js        | The server start file |

## Testing
The tests are written in Jest and the assertions done using Should

```
"jest": "29.4.3",
"should": "13.2.3"
```

### Running tests using NPM Scripts
````
npm run test
````
Test files are created under the tests folder. Make sure to include in the test file name `.test.js`.
