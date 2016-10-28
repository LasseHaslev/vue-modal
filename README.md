# @lassehaslev/vue-modal

> Vue modal is a simple modal component for frontend framework vuejs

## Installation
Run ```npm install @lassehaslev/vue-modal --save``` in your project folder

## Usage
The modal stays hidden until it either gets its ```open()``` triggered or receive ```OpenModal``` event.


Load modal
``` js
import Modal from './Modal.vue';
Vue.component( 'modal', Modal );
```



``` html
<modal ref="modal">Hello world</modal>
<button @click.prevent="$refs.modal.open">Open modal with event</button>
```

#### Styles
Styles can be found ```dist/style.css```.

##### Modify style
You can also use ```src/styles/style.scss``` to compile your own css.

**This is the properties you can overwrite:**
``` scss
/* Modal width */
$modal-margin-top: 3% !default;
$modal-responsive-width: 90% !default;
$modal-width: 730px !default;

/* Modal style */
$modal-background-color: white !default;
$modal-padding: 16px !default;
$modal-border-radius: 10px !default;

/* Modal backdrop */
$modal-backdrop-color: black !default;
$modal-backdrop-opacity: .725 !default;

/* Modal close button */
$modal-close-diameter: 25px !default;
$modal-close-offset: .8 !default;
$modal-close-background-color: $modal-background-color !default;
$modal-close-content: 'X' !default;
```

## Development
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

## License

MIT, dawg
