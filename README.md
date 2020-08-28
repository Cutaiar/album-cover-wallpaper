# Album Cover Wallpaper Generator

This project generates a phone background using all of your album covers.

It uses ReactJS for front end and express as a simple server for a wallpaper creation service.

There are two separate npm projects. One is in `/frontend` and the other is in `/wp-service`. Remember to run npm scripts for both. Details on running below.

## Quickstart

- Clone the repo
- run `npm install` in `/frontend`
- run `npm install` in `/wp-service`
- run `npm start` in `/frontend`
- run `node server.js` in `wp-service/server` (in another terminal)
- fix the code so it works

What you've just done is installed all dependencies, started the frontend on port 3000 and started the wallpaper service server on port 3001. The frontend will hit port 3001 with all the image URIs and the backend will respond with "YEET".

## Frontend

The frontend uses React.

The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In `/frontend`, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Backend

The backend is just a simple express server that listens on `localhost:3001` for `POST` requests that have a `JSON` body. The body should be a `JSON Array` where each element is a `URI` for an album cover. It will stitch these images together into a wallpaper and return the wallpaper as `TBD`.

### Run

`cd` into `/wp-service/server` and run `node server.js`. The server will listen on `localhost:3001` for the request described above.