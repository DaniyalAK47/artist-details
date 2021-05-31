# Artist Details
It is a single page web application where user can search for his favourite artist and get information of the events on the dates specified.


## Deployment
I deployed the application on netlify which is very easy to use. The deployment is hooked to the Github and is configured to automatically deploy everytime the code is pushed to day01 branch.


## How it works?
- Go to link [https://artist-details-daniyal.netlify.app/](https://artist-details-daniyal.netlify.app/).
- Search for your favourite artist
- If the artist searched doesnt exist a message of no artist found is displayed.
- If the artist searched is found the artist details are present with facebook link and much more.
- Then you can specify the dates and click search event.
- If no events found during theses dates specifies the a message is displayed of no events found.
- if events found, then the list of all the events in the are shown with the necessary information and a button which moves you to official bansintown page.

## Screenshot
View the web application sccreshots using these links.
[On landing.](https://drive.google.com/file/d/1CDw9AMGfDNVTbBRVM-Xo6S2S4HGg_lEr/view?usp=sharing)
[When artist is searched.](https://drive.google.com/file/d/1Je93w6e8fHd5edO_y6gkaqcKrrpwRu2w/view?usp=sharing)
[When events are searched within the dates](https://drive.google.com/file/d/1bIMevKI7aD6QilEqcw9voSTr0T0oQ8k2/view?usp=sharing)

## Testing
View the test results screenshots using these links.
[Test results.](https://drive.google.com/file/d/1WX3H8GQDtUo4uHrmYuhH04ZLnRpTQoss/view?usp=sharing)
 
## Stack Choices

### React js
React js a JavaScript library widely used in industry which is maintained by Facebook. With the help JSX we can easily write our own components. This is important because the quality of the user experience plays and important role in the application’s success. Addition feature hooks which are functions that help use React state and lifecycle features in functional components. To guarantee better user experience and higher app performance, React has virtual DOM.
Material-UI
Material-UI, the React component library based on Google Material Design, allows for faster and easier stylized web development. Using this we have access to usable components which helps speed up development. Also, we have the freedom to make any changes necessary according to our requirement. Using Material-UI helps us maintain a consistent appearance.

### Redux
Redux is a JavaScript state management tool. Redux’s main idea is that to save the whole state in a central location so that any component can access this state directly. This simplifies and cleans the code as now we don’t need to pass information in constructors for example. Also, the whole state in saved in a place called store and so the data coming from is the sole truth. Furthermore, Redux Thunk was used and this come handy as we were making API request and we need to dispatch on promise success and error. Finally, I used Redux-Devtool which helped me perform time-travel debugging and much more to make sure everything worked fine.

### React Testing Library
React-Testing-Library is a lightweight solution for testing React components and is commonly used with Jest.It takes away excessive work required to test React components well. It enables testers to write quality tests that ensure complete accuracy. Encourages applications to be more accessible.

## Architecture
The major file is public and src folders. The src folder has the main App.js file. However, the src folder is sub divided in __Tests__, Assets, Components, Pages and Redux. This increases reusability, and understandability. __Tests__ contains the test suites for our different components. Asset’s folder contains the images used. The Pages folder is further divided into five subfolders. The subfolders are Header, Landing, ArtistDetail, ArtistEvents and Footer. Each of these subfolders contain the file of code of the corresponding section of the webpage. The component folder contains the different reusable components created. Redux folder contains two further subfolders. The two subfolders are actions and reducers. Actions subfolder contains 2 file dataActions and datActionsTypes where basically the API request are made and specific dispatch functions with the necessary information added are called to reducers. The reduces subfolder contains the file dataReducers which basically initiates the store and performs the necessary changes to the store. 

## Available Scripts

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

