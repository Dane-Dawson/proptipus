# Proptipus Props Practice

This is a lab that is design to practice use of props in React in a myriad of applications. It is intended as a supplimental fun exercise to reinforce and solidy the concepts useful to work within the React framework, specifically it's `state` and `props`. This is *NOT* an introduction to props, but rather demonstrates some common ways props are used within React for you to explore and experiment with.

To install this project run 
```
npm install
```
and to run this server use
```
npm start
```
Now let's get to the fun!

# Proptipus the Prodigious cePhaloPod.

Proptipus the cephalopod has a plethora of pretty pleasant past-times, but priorly preconcieved postulations prevent our poor Proptipus from performing his practical pursuits.

*whew*, that was a mouthful!

Proptipus is an octopus made out of React components. He consists of one `Octopus` component that contains within it 8 unique `Tentacle` components. Unfortunately our poor pal Proptipus had a really rough night and can't quite get his tentacles to respond how he wants them to! Let's help connect his thoughts (stored in `state` in our `Proptipus` component) to his `Tentacle` components how they should.

**NOTE**

You should NEVER have to manually change the state for this project, meaning the `state` portion of `Proptipus.js` should stay untouched throughout this whole practice! Proptipus knows everything already, you should only be adding functions and passing props around, then digging into those props to render on the page!

There will be comments in each component describing what kind of data should be placed where, so make sure we read the direections and look at the corresponding `Tentacle` component...


![And we're off](https://i.imgur.com/SpWxL2e.gif)

...And we're off!

## Tentacle 1 - Passing a value as a prop

Proptipus is trying to write down the punch line to his favorite joke, but can't seem to get his tentacle to respond. Currently stored in state as `punchline`, can you help pass down the string to his `TentacleOne` to display in the proper `<span>` tag?

## Tentacle 2 - Passing an object as a prop, class component

Proptipus loves his eccentric hobbies, and has been collecting Fish-Gi-Oh cards since he was but a wee larvae (look it up, that's actually what newborn octopi are called!). 

Help him recreate his favorite Fish-Gi-Oh card from memory by passing the `favoriteFishGiOh` object down into `TentacleTwo` and filling out the information accordingly. Check the comments in the component for which value goes where!

## Tentacle 3 - Passing an object as a prop, functional component

Not only does Proptipus have a favorite card...he has a LEAST favorite card too! Find his `hatedFishGiOh` card in state and pass that to `TentacleThree` to display it...heads up though, this component is a functional component, so you'll have to interact with those props a little differently!

## Tentacle 4 - Passing an array as a prop

Proptipus has a lot of friends (so he says), and has been meaning to get their contact information written down...can you help him transfer his ENOURMOUS friend list from his head onto his address book?

For this challenge you'll need to find the `friendList` state and pass that array into `TentacleFour`. Once you have access the whole whole array in `TentacleFour` you can iterate through it to create our table rows! If you can't remember how to make a table...check out [this link](https://rb.gy/ovna3p) for some tips!

👀 Let me just hide in here while you work on that...

![Let me hide here](https://media4.giphy.com/media/iGvuyVRNK6ucSfrO5n/giphy.gif)

Congratulations! That's the basic passing of props and their data! At this point on, we're getting into more intricate (but not uncommon) data flows that should take time to work out!

## Tentacles 5 and 6 - Bubbling events and re-rendering via state change

Proptipus is quite the inventor. Just last week he created a `Magic Remote` that connects from his fifth tentcle to his brain, and then to his `Prop-boy`™️ held in his sixth tentacle! It's amazing! Or at least it will be, once you help him fix it...

First, we need to connect the `Prop-boy`™️ to the `magicNumber` stored safely in Proptipus' mind (`state` in the `Proptipus` component). In `TentacleSixth` you will see a `<span>` ready to display his magic number. 

Next we need to connect the `Magic Remote` buttons to correctly increment and decrement the magic number. 

Remember!
>Since the number is stored safely in his mind (the `Proptipus` component), the logic that changes that number will need to live in the same component.

When everything is connected correctly, we should be able to see our magic number displayed lovingly on our `Prop-boy`™️ and affect it by pushing both the buttons on the `Magic Remote`

## Tentacles 7 and 8 - Bubbling and re-rendering conditional render

Proptipus is looking to get connected with the world and has been working on setting up a series of message boards.However, he's been reading some tech blogs and really wants his message board to be fancy and reactive to another, completely separate message board. Let's help Proptipus get his two message boards up and connected!

### First, hide and seek with the movie list!

Currently in state is a list of Proptipus' favorite movies saved as `favoriteMovies`, each including a title, genre, and his personal rating. To begin with let's pass that entire array down into `TentacleEight` and iterate through it to create a post for each movie, following the structure currently built in the component.

After this is successfully rendering, let's get our second message board up and running! The first thing Proptipus wants is the ability to hide and show his favorite movies on command, and thankfully he set up a series of radio dials to handle that for us! 

Proptipus is remembering if his  list should be shown or not by checking the `showMovies` state stored in state. He has it set by default to `false`. What we need to do next is connect the radio inputs on `TentacleSeven` to change our `showMovies` to true or false, depending on which dial is selected. For a little review on how to use radio buttons, check out this link:
>https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs

After we get our `showMovies` to react to our selection, we need to connect a conditional render to `TentacleEight` so it will *only* show the movies if `showMovies` is `true`.

### Sort by movie type!?!

Proptipus always wants to be on the hip, cutting edge of technology (look at how sweet his message board setup is), and what he really thinks will spruce up his movie showcase is a filter feature. 

He is storing which movies he wants to look at in `moviesFilter` stored in state. We want to use that `moviesFilter` to sort through `favoriteMovies` and *ONLY* show the ones that match the selected genre. 

Thankfully Proptipus set us up a drop down selector on `TentacleSeven`, so your next steps are probaly:
- Connect the selector to change `moviesFilter` when a different choice is selected
- Once the `moviesFilter` has been updated, create a function(s) that will use that state to adjust the array before it's sent into `TentacleEight`

## The End!

You made it! You've completed a bizarre cacophony of tasks created by a [truly ridiculous person](https://www.linkedin.com/in/dane-dawson/), I applaud you for your persistence. Hopefully you were able to use this experience to help strengthen some aspect of your programming foundation, and I really hope you enjoyed it even a fraction as much as I enjoyed making it.

Thank you for helping Proptipus, he appreciates everything you've done for him...but he knows the real gifts are the friends you make along the way.

![Thank you](https://media4.giphy.com/media/cIWgQjnBhJHdvIxpJH/giphy.gif)
