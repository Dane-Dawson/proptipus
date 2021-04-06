# Proptipus the Prodigious cePhaloPod.

This is a lab that is design to practice use of props in React in a myriad of applications. It is intended as a supplimental labwork to reinforce and solidy the concepts needed to work within the React framework with it's `state`.

To install this project run 
```
npm install
```
and to run this server use
```
npm start
```
Now let's get to the fun!


Proptipus the cephalopod has a plethora of pretty pleasant past-times, but priorly preconcieved postulations prevent our poor Proptipus from performing his practical pursuits.

*whew*, that was a mouthful!

Proptipus is an octopus made out of React components, consisting of one `Octopus` component that contains within it 8 unique `Tentacle` components. Unfortunately our poor pal Proptipus had a really rough night and can't quite get his tentacles to respond how he wants them to! Let's help connect his thoughts (stored in `state` in our `Proptipus` component) to his `Tentacle` components how they should.

**NOTE**

You should NEVER have to manually change the state for this project (meaning via a code editor)! Proptipus knows everything already, you should only be adding functions and passing props via interactions through the page itself!

## Tentacle 1 - Passing a value as a prop

Proptipus is trying to write down the punch line to his favorite joke, but can't seem to get his tentacle to respond. Currently stored in state as `punchline`, can you help pass down the string to display in the proper `<span>` tag?

## Tentacle 2 - Passing an object as a prop, class component

Proptipus loves his eccentric hobbies, and has been collecting Fish-Gi-Oh cards since he was but a wee larvae (look it up, that's actually what newborn octopi are called!). Help him recreate his favorite Fish-Gi-Oh card from memory by passing the `favoriteFishGiOh` object down into `TentacleTwo` and filling out the information accordingly.

## Tentacle 3 - Passing an object as a prop, functional component

Not only does Proptipus have a favorite card...he has a LEAST favorite card too! Find his `hatedFishGiOh` card in state and pass that to `TentacleThree` to display it...heads up though, this component is a functional component, so you'll have to interact with those props a little differently!

## Tentacle 4 - Passing an array as a prop

Proptipus has a lot of friends (so he says), and has been meaning to get their contact information written down...can you help him transfer his ENOURMOUS friend list from his head onto his address book?

For this challenge you'll need to find the `friendList` state and pass that array into `TentacleFour`. Once you have access the whole whole array in `TentacleFour` you can iterate through it to create our table rows!

## Tentacles 5 and 6 - Bubbling events and re-rendering via state change

Proptipus is quite the inventor. Just last week he created a `Magic Remote` that connects from his fifth tentcle to his brain, and then to his `Prop-boy`™️ held in his sixth tentacle! It's amazing! Or at least it will be, once you help him fix it...

First, we need to connect the `Prop-boy`™️ to the `magicNumber` stored safely in Proptipus' mind (`state` in the `Proptipus` component). In `TentacleSix` you will see a `<span>` ready to display his magic number. 

Next we need to connect the `Magic Remote` buttons to correctly increment and decrement the magic number. 

Remember!
>Since the number is stored safely in his mind (the `Proptipus` component), the logic that changes that number will need to live in the same component.

When everything is connected correctly, we should be able to see our magic number displayed lovingly on our `Prop-boy`™️ and affect it by pushing both the buttons on the `Magic Remote`

## Tentacles 7 and 8 - Bubbling and re-rendering conditional render

https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs


## Planning/ideation

-note, something wonky going on with TentacleSix import...

The purpose of this lab is familiarity with props and how they can be used.

Loose format concept is an octopus component that has 8 leg components, state is stored in the octopus "body" (like a brain") and each successive task builds in complexity. Current ideas for progression.

--Need to make a functional vs class component child as well.

One arm displaying value => simple state value output
    Maybe a pun, and punchline is displayed with prop passed. If it's an img punchline can be hidden until reveal.

Another holds some object for data keys. => prop object deconstruction
    Maybe id? Or pokemon card parody with stats filled? 

Another holds an array of data to iterate => prop iteration
    cards? Don't want to re-use ideas...robots? 

Two arms connected with incrementer/decrementer => bubble up event listener
    One has simple controller with two buttons, the other a display screen. Student must create function to capture button click, alter state and display it below. Need clever thing to track...Song stuck in head?
    
Two arms connected with show/hide ball => conditional render

last arm can be connect to do a ball switch if both tentacles are closed? 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
