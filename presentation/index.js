// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Redux Verticals
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Managing Redux in Complex Apps
          </Text>
        </Slide>
        <Slide>
          <Heading
            textColor="secondary"
          >
            Who I Am
          </Heading>
          <List
            bold
            caps={ false }
          >
            <ListItem>
              BerkeleyTrue
            </ListItem>
            <ListItem>
              Developer @freeCodeCamp
            </ListItem>
            <ListItem>
              Advocate
              <List>
                <ListItem>
                  Composability
                </ListItem>
                <ListItem>
                  Reactivity
                </ListItem>
                <ListItem>
                  Simplicity
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide
          bgColor="black"
        >
          <Heading
            caps
            size={ 2 }
            textColor="white"
          >
            What it's inside:
          </Heading>
          <List
            bold
            caps
            textColor="white"
          >
            <ListItem>
              Redux architectural ideas
            </ListItem>
            <ListItem>
              Comparisons to other patterns
            </ListItem>
            <ListItem>
              General rules
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Common Frustrations
          </Heading>
          <List>
            <ListItem>
              Too much boilerplate
            </ListItem>
            <ListItem>
              Action creator functions
            </ListItem>
            <ListItem>
              long switch statements reducers
            </ListItem>
            <ListItem>
              Wiring To React (Containers)
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Common misconceptions
          </Heading>
          <List>
            <ListItem>
              1 to 1 action/reducer misconception
            </ListItem>
            <ListItem>
              creating actions for reducers
            </ListItem>
            <ListItem>
              Using actions as commands
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>
            Boilerplate
          </Heading>
          <List>
            <ListItem>
              Preferable over complex frameworks
            </ListItem>
            <ListItem>
              Can be mitigated with utils libraries
            </ListItem>
            <ListItem>
              Keeps core library small
            </ListItem>
            <ListItem>
              Keeps core library unopinionated
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Decide on standards
          </Heading>
          <List>
            <ListItem>
              Use Flux Standard Actions (FSA)
            </ListItem>
            <ListItem>
              Action Types should be events
            </ListItem>
            <ListItem>
              Separate by Feature
            </ListItem>
            <ListItem>
              Use namespacing
            </ListItem>
            <ListItem>
              Use selectors
            </ListItem>
            <ListItem>
              Use meta for commands
            </ListItem>
            <ListItem>
              Epics > Sagas > Thunks
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            FSA
          </Heading>
          <List>
            <ListItem>
              type
            </ListItem>
            <ListItem>
              payload
            </ListItem>
            <ListItem>
              meta
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Action types as events
          </Heading>
          <Heading size={4}>
            clickOnCreateThing vs makeThing
          </Heading>
          <text>
            Describes your UI
          </text>
          <List>
            <ListItem>
              clickOnCreateTodo
            </ListItem>
            <ListItem>
              hoverOverTodo
            </ListItem>
            <ListItem>
              fetchTodoComplete
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Separate by Feature
          </Heading>
          <Heading size={4}>
            not by type
          </Heading>
          <Text>
            A distinct part of your app
            (\TodoList vs \containers)
          </Text>
          <List>
            <ListItem>
              DefaultState
            </ListItem>
            <ListItem>
              Selectors
            </ListItem>
            <ListItem>
              Reducers
            </ListItem>
            <ListItem>
              Action Types
            </ListItem>
            <ListItem>
              Epics (or Sagas)
            </ListItem>
            <ListItem>
              Components
            </ListItem>
            <ListItem>
              Styles
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Common Folder = less searching
          </Heading>
        </Slide>
        <Slide>
          <Heading>
            Redux - Ducks Pattern
          </Heading>
          <Heading size={6}>
            State concerns in one file
          </Heading>
          <List>
            <ListItem>
              Easy Refactoring
            </ListItem>
            <ListItem>
              Events => State
            </ListItem>
          </List>
          <Heading size={6}>
            State Concerns in Feature Folder
          </Heading>
        </Slide>
        <Slide>
          SBF example
        </Slide>
        <Slide>
          <Heading>
            namespacing (NS)
          </Heading>
          <Heading size={5}>
            Inspired by Clojure
          </Heading>
          <List>
            <ListItem>
              Features can be namespaces
            </ListItem>
            <ListItem>
              i.e. Todo, TodoList, Header, Footer, App
            </ListItem>
            <ListItem>
              Action Types
              <List>
                <ListItem>
                  header.titleUpdated
                </ListItem>
                <ListItem>
                  footer.clickOnShowCompleted
                </ListItem>
                <ListItem>
                  todolist.clickOnComplete
                </ListItem>
                <ListItem>
                  app.fetchTodosComplete
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Why?
          </Heading>
          <List>
            <ListItem>
              Easily trace actions
            </ListItem>
            <ListItem>
              Common events with Same names
            </ListItem>
            <ListItem>
              Group common events throughout
            </ListItem>
            <ListItem>
              Test in isolation
            </ListItem>
            <ListItem>
              (mount Features on their own?)
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Selectors
          </Heading>
          <List>
            <ListItem>
              Snuggly up with defaultState
            </ListItem>
            <ListItem>
              Strictly to pull value
            </ListItem>
            <ListItem>
              Or to create derived State
            </ListItem>
            <ListItem>
              Selector at component should not know state shape
              <List>
                <ListItem>
                  Refactor state =/= Refactoring Components
                </ListItem>
                <ListItem>
                  Component can be tested with just proptypes
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading>
            Use reselect sparingly
          </Heading>
          <List>
            <ListItem>
              When deriving state from complex data structures
              <List>
                <ListItem>
                  Array iteration
                </ListItem>
                <ListItem>
                  Denormalizing state
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              Pulling state from many selectors
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
