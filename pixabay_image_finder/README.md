This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Changes and Improvements (by Eugene Sulakov)

- Migrated from class-based `Search` component to functional component using React Hooks.
- Updated React from version 16 to 18 and ReactDOM accordingly.
- Upgraded `react-scripts` to v5.0.1 for modern JavaScript support (e.g. optional chaining).
- Replaced deprecated `material-ui` v0.20 with `@mui/material` v5.
- Removed `MuiThemeProvider` and replaced it with modern `ThemeProvider` from `@mui/material/styles`.
- Added full dark theme support using MUI theming and `<CssBaseline />`.
- Updated `index.js` to use `ReactDOM.createRoot()` as recommended in React 18.
- Fixed bug: changing image amount (`per_page`) now also refreshes the search results.
- Refactored `onAmountChange` to conditionally re-fetch images via Axios.
- Added `.catch()` handlers for all Axios requests to handle API errors properly.
- Fixed critical Webpack 5 crash (`ERR_OSSL_EVP_UNSUPPORTED`) by applying `--openssl-legacy-provider`.
- Cleaned up unused imports and migrated all JSX to comply with updated React & MUI standards.
- Refactored `ImageResults.js` to use modern MUI `Card` components instead of custom styles.
- Manually confirmed all component paths, fixed casing where needed.
- Structured files consistently: `components/navbar`, с`components/search`, `components/image-results`.
- Removed legacy service worker logic (still uses `unregister()`).

## Available Scripts

In the project directory, you can run:

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
