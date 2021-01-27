# App Notes

## Some Comands
* To create a production bundle, use `npm run build` or `yarn build
* You can add webfonts, meta tags, or analytics in `index.html`.
* File `manifest.json` describes your application and it's used by e.g. mobile phones if a shortcut is added to the homescreen.mobile
* To transpile `sass` use:  sass --watch ./src:./src
## Some Rules to Code
* To write React components:
  * use functions (hooks)
    * 1 funtionality = 1 hook
    * 1 component = 1 hook
    * 1 hook + 1 .scss => .test.js (render, functions, userEvents)
* To write scss:
  * use BEM
  * write in order:
    * box properties: display, with, height, margin, etc
    * position: position, top, left, etc
    * typography: text-tranform, text-decoration, etc
    * decoration: background-image, color, etc
    * varibles
    * mixins
## Summary
Aplication of notes to take 3 types of notes notes, tasks and rutines:
* notes: has a tag and a title
* tasks: has a tag, title and state
* rutines: has a tag, title, states
