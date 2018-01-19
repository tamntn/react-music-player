# React Music Player

## What's covered in this React Music Player?
### What is a React component?
- A React component is a bit of code that represents a piece of the page. Each component is a JavaScript function that returns a piece of code that represents a piece of a web page.
- To build a page, we call these functions in a certain order, put together the result, and show it to the user.
- React uses a language called ```JSX``` that looks like HTML but works inside JavaScript, which HTML usually doesn’t do.
- We can put React components inside other components. This is how we build our page out of pieces of React — by nesting components inside of each other.
### ReactDOM rendering
### Class vs functional components
- When we write components as functions, we have **functional components**. We can also write components as Javascript classes, which are called **class components**.
- Class components must have a function called ```render()```. The render function returns the JSX of the component. They can be used the same way as functional components, like this: <AClassComponent />.
- You should use functional components over class components because they’re easier to read, unless you need component state
### JSX
- You can put **Javascript variables inside of JSX**
- You can also do more difficult stuff, like call a function
- When writing component in JSX, use ```className``` instead of ```class``` to give a class to a certain component. ```class``` is a keyword in Javascript.
### State
- Class components can store information about their current situation. This information is called ```state```, which is stored in a **Javascript object**.
- A ```constructor``` method of a React component always needs to call ```super(props)``` before anything else.
- State is a way to update our UI based on events.
- ```setState``` is bad because it doesn't do stuffs right away. React waits a bit to see if there are more changes to make, then it does the state changes. That means you don’t know for sure what your state will be when you call ```setState```.
### Event handling
### Asynchronous setState
### Props
- Props don't have to be just information. They can be functions as well.
### Refs

## Reference
### [Tutorial Link](https://medium.freecodecamp.org/everything-you-need-to-know-about-react-eaedf53238c4)
### [Audio Visualization](https://codepen.io/soulwire/pen/Dscga)