# vue-modal
Vue modal is a simple popup modal component for frontend framework vuejs

## Motivation

Needed a simple and reusable modal for vuejs.

## Usage
The modal stays hidden until it either gets its ```open()``` triggered or receive ```OpenModal``` event.

#####First you have to include the component
```
Vue.component({

  el: '#app',
  
  components: {
    'modal': require( 'vue-modal' ),
  },
  
});
```

#####Then you need to include the element in the view
```
<div id="app">
  <!-- Add modal component to view. Note: v-ref:modal is for calling function on modal, see below. -->
  <modal v-ref:modal></modal>
  
  <!-- Open modal through open() function. Requires: v-ref: on modal -->
  <button @click.prevent="$refs.modal.open">Open modal with modal method<button>
  
  <!-- Open modal through 'OpenModal' event. -->
  <button @click.prevent="$broadcast('OpenModal')">Open modal with external event.<button>
</div>
```

####Events
The modal component dispatches events on open and close
```
Vue.component({

  template: '<modal></modal>',
  
  ready: function() {
    // Open the modal with event
    this.$broadcast( 'OpenModal' );
  },
  
  events: {
    'ModelOpen': function() {
      alert('ModelOpen');
    },
    'ModelClose': function() {
      alert('ModelClose');
    },
  },
  
  components: {
    'modal': require( 'vue-modal' ),
  },
  
});
```

#### Styles
Styles can be found ```dist/vue-modal.css```. If you want the minified version: ```dist/vue-modal.min.css```.

##### Modify style
You can also use ```src/styles/Modal.scss``` to compile your own css.

**This is the properties you can overwrite:**
```
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

## Installation

Run ```npm install vue-modal --save``` in your project folder


## Development

Run ```sh ./before-publish.sh``` to compile css.

## License

MIT, dawg
