/**
 * NPM BASICS:
 * npm - install node package
 * npx - execute node package
 */

/**
 * CREATING REACT ELEMENT:
 * creating element in React takes in 3
 * HTML element,
 * object of attributes like class, id
 * it's children
 *      The child can be another create element to nest elements inside another
 *      we can use [] to add 2 elemts in the same level.
 */
React.creatElement("div", { id: "first-div" }, "Hello");

//CREATING REACT ELEMENT USING JSX:
const jsxHeading = (
  <h1 id="heading">This is how React Element is created using JSX</h1>
);

/**
 * creating root
 * assiging "root" from DOM as React root
 */
const root = React.creatRoot(document.getElementById("root"));

/**
 * render - renders parent inside root
 */
root.render(parent);

/**
 * START PARCEL:
 * npx parcel index.html
 */

/**
 * PARCEL DOES:
 * dev build
 * live server
 * HMR - Hot Module Replacement comparing the two "dist" and ".parcel-cache" files
 * File watching algorithm written in C++
 * Reliable Caching for faster builds
 * Compressing files
 * Bundeling
 * Minification
 * Consisting Hashing
 * Code Splitting
 * Tree Shaking - Remove unused code during bundeling
 * Differential Bundling - To support older browsers
 * Error display view for developers on localhost
 * HTTPs deployment in Dev Environment
 * Different dev and prod bundlers
 */

/**
 * BABEL:
 * when we do
 * const headingUsingJSX = <h1 id="headingUsingJSX">H1 from JSX</h1>;
 * JavaScript engine doesn't understand this
 * BABEL transpiles so that react understands it and before it reaches JS Engine which is managed by Parcel or webpack
 * JSX => BABEL transpiles into React.createElement => ReactElement - JS Object => HTML Element(render)
 * Babel transpiles JSX into React code or JS code that browser understands
 */

/**
 * ABOUT PACKAGE.JSON AND PACKAGE-LOCK.JSON
 * ^ means it will update to the latest minor version automatically
 * ~ means it will update to the latest major version automatically
 *
 * Better to have ^ coz it updates just minor upgrades.
 *
 * package.json
 * config file
 * keeps track of what APPROX verson of npm that is installed with ^ and ~
 *
 * package-lock.json
 * locks the EXTACT version and keeps track of it
 * Keeps the track with SHA encryption
 */

/**
 * To code in react without doing npm create react app at the begining
 *      -create normal HTML, CSS, JS files
 *      -install parcel - npm install -d parcel (-d means it's a devDependencies)
 *      -install react and reactDOM - npm install react, npm install react-dom
 *      -run parcel - npx parcel index.html
 *      -add a "start" scrip in package.json to do "parcel index.html"
 *      -then do "npm start" and "npm run build"
 */

/**
 * JSX
 * JSX is HTML like syntax inside JavaScript, NOT HTML IN JAVASCRIPT!!!
 * We use className in JSx insatead of HTML class
 * We can camel casing in JSX instead of hyphen in HTML(for class names)
 * wrap in () for multiple lines
 */

/**
 * COMPONENTS
 * Component is a normal javascript function which returns a JSX or a div
 * Class Based
 * Functional Based  - Always starts with capital letter
 * Component Composisition - using one component inside another. Just call the oher component like <.../> inside the other
 */

/**
 * ABOUT IMPORTS
 * Imports of are 2 types
 * 1. Named
 *      - exported in the variable creation line as  - export const blah
 *      - imported as - import { blah } from ../../ fileName
 * 2. default
 *      - exported as - export default blah at the end of component file.
 *      - imported as - import blah from ../../fileName
 */

/**
 * HOOKS:
 * They are Normal JS Functions
 * 1. useState
 *      - creates super powerful react state variables.
 *      - imported as named import using { useState } from "react"
 *      const [varName] = useState(initialize value)
 * As soon as the state varibale changes, react rerenders the component in optimised way and very less code
 * Keeps data kayer in sync with the UI Layer
 * 2. useEffect
 */

/**
 * WHY IS REACT SO FAST?
 * Efficient DOM manipulation and crazy fast rerenders
 *1. Virtaul DOM
 *      - Copy of the DOM in the form of an Object
 *2. DIFF ALGORITHM. REACT FIBER, RECONCILIATION ALGORITHM
 *      - checks the difference between old virtual DOM and new virtual DOM after state change and changed the UI
 * 3. Coz of Parcel or webpack
 */

/**
 * BEST ARCHITECTURE FOR REACT
 * LOAD PAGE -> RENDER -> CALL API -> RE-RENDER COMPONENT WITH NEW DATA FROM THE API
 */

/**
 * ABOUT USEEFFECT:
 * useEffect()
 * Is a JS function
 * It is called after the component is rendered
 * Secong arg is a dependent array[]
 *
 */

/**
 * FOR SYSTEM DESIGN:
 * 1. Use Parcel for the above stated advantages.
 * 2. Config Driven UI - controlling how Ui looks like using data and based on data
 * 3. Good UI Engineer should ask why the API is sent like that. should be good in UI layer and a data layer engineer
 */

/**
 * Create React Element
 * Create React Functional Compoment
 *      using arrow function
 *      normal old method
 * Use {} inside component to add JS code
 */

//React Element
const ReactElement = (
  <h1 id="element" className="element">
    React Element
  </h1>
);

//React Functional Component
const Para = () => {
  return (
    <div>
      {/* use {} to write JS inside JSX */}
      {ReactElement}
      <p>This is 1st para</p>
      <h6>h6</h6>
    </div>
  );
};

const Heading = () => {
  return (
    <div>
      <Para />
      {Para()}
      <h1>heading</h1>
    </div>
  );
};
