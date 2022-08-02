# Emotion-Based Music Recommendation System - CLIENT

The project is hosted at [foam-music.vercel.app/](https://foam-music.vercel.app)

## Contribution
### For Collaborators
- Create a new branch
- Commit the fix to the newly created branch
- Push to that branch for review
- Merge after the code has been reviewed by another member

        git checkout -b <new-branch-name>
        git pull
        git add .
        git commit -m "<message-for-the-commit>"
        git push origin <new-branch-name>
        
## Access to Spotify API
### Retrieving API access key
- Navigare to this link [Spotify Developer API Dashboard](https://developer.spotify.com/dashboard/) to get your `CLIENT_ID` and `CLIENT_SECRET`
- Include the `CLIENT_ID` and `CLIENT_SECRET` in `src/api/config.js`
- Review the [Spotify API docs](https://developer.spotify.com/documentation/web-api/guides/) if changes are needed

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
