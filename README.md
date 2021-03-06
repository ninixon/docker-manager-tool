# Docker Manager Tool

Go based application that allow developers to interact with their docker stack with web UI.

![Docker Manager Tool](doc/images/screenshot.png "Docker Manager Tool")

This repository is split in three parts:
- **build**: ready to use binary packages
- **client**: ReactJS + Redux based web UI sources to interact with docker API through server application
- **server**: Go based application sources, interacts with native docker API and serves web UI with websockets

## Usage

To be done.

## Development

### Server

In the **server/src/github.com/ekkinox/docker-manager-tool** directory, you can run:

`go run docker-manager.go`

Runs the backend app in the development mode.<br>
Serves [http://localhost:5000/ws](http://localhost:5000/ws) for the web UI.

### Client

In the **client/** directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will auto reload if you make edits.<br>
You will also see any lint errors in the console.

`npm run build`

Builds the app for production to the `client/build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the rev hashes.<br>

## Author

Jonathan VUILLEMIN - ekkinox@gmail.com

## Licence

[MIT](https://en.wikipedia.org/wiki/MIT_License)

