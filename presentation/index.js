// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
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
            Managing redux in a complex app
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Main complaints</Heading>
          <Heading size={1} textColor="secondary">Boilerplate</Heading>
          <Heading size={2} textColor="secondary">b</Heading>
          <Heading size={3} textColor="secondary">c</Heading>
          <Heading size={4} textColor="secondary">d</Heading>
          <Heading size={5} textColor="secondary">e</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
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
            </ListItem> </List>
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
              1 to 1 action/reducer misconception
            </ListItem>
            <ListItem>
              creating actions for reducers
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading>
            Boilerplate
          </Heading>
          <List>
            <ListItem>
              Can keep you on track
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
      </Deck>
    );
  }
}
