# Redux Verticals

A talk based on a discussion with Borris Cherny (@bcherny) on the structure and
core theories behind freeCodeCamps redux/react/rx codebase.

## Notes from initial discussion

- Why most people find redux frustrating
  * reducer/action boilerplate
  * 1 to 1 reducer/action ratio misconception
  * creating actions for reducers (commands) vs creating actions for app events
- action/reducer relationship should be many to many
- actions should be written for events for and second for reducers/commands
- reducers should respond to at least one action
- reducers could respond to many actions
- actions can trigger zero or more state changes
- reducers should care only about their own state but can respond to actions
  from other parts of the app
- namespace actions to specific features of your app
- flat is better
  - flat folder structure
  - flat combined reducer shape
- imports can be circular
- state updating state(dont remember this one)
- inspired by clojure namespacing
