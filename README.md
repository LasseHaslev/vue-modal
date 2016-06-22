# vue-modal
Vue modal is a simple popup modal component for frontend framework vuejs

## Motivation

Needed a simple and reusable modal for vuejs.

## Usage
The modal stays hidden until it eather gets its ```open()``` triggered or receive ```OpenModal``` event.

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


## Installation

Run ```npm install vue-modal --save``` in your project folder

## License

MIT, dawg
