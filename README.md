# CogniAssist Chat Widget

A simple widget to connect with CogniAssist chatbot platform.

## Features

- Text Messages
- Quick Replies
- Banner Text and Image
- Images,Audios and Videos
- Datepicker
- File Upload
- Easy to import in a script tag or as a React Component
- Persistent sessions
- Typing indications
- Smart delay between messages

## Usage

### In a `<script>` tag

In your `<body/>`:
```javascript
<script src="https://cogniwide.com/assets/cogniassist-latest.js"></script>
<script>
  CogniAssistWidget.default.init({
    selector: "#cogniassist",
    botName: 'cogniassist'
  });
</script>
```

## Release notes

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.