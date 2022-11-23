# Social Finance MaterialUI Components

This is a small library of UI components for SF React projects. It leverages the MUI library for styling and underlying application components but builds upon it to deliver components tailored to the requirements of SF.

Eventually the intention is that this should be a full-blown NPM library but for now, and until the API and use-cases are stable, the only way to utilise it is to `yarn link` or `npm link` it into an existing React application.

Note: a quirk of Create React App based applications is that they do not support peer dependencies defined outside the src folder. For this reason if this components are to be used in an unejected CRA application you must also link `react` and `react-dom` from the node_modules folder in this project. Not doing so will cause two copies of React to be loaded onto the page and an outbreak of havoc will ensue.
