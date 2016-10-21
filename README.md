# Click Outside JS
Standalone javascript library to make click outside event. You can use it anywhere even with other JS library~ It Just works!

#### [DEMO](https://bosnaufal.github.io/click-outside-js)

## Install
Include [click-outside.js](./click-outside.min.js) to your web page.

or

You can install it via NPM
```bash
npm install click-outside-js
```


## Usage
```javascript
// Define the element
var el = document.getElementById('target');

// Make New Click Outside Event
var myEvent = new onClickOutside(el, function() {
  console.log("You've Just Clicked Outside The Box!");
})

// Other Methods
// myEvent.remove() // To Remove Event Listener
// myEvent.reinit() // To Reinit Event Listener

```

## Thank You for Making this useful~

## Let's talk about some projects
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
