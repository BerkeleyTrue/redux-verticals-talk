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
              Use Redux-Observables
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
      </Deck>
    );
  }
}
