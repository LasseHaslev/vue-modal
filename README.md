# @lassehaslev/vue-modal

> Simple Modal logic with Vue2

## Installation
Run ```npm install @lassehaslev/vue-modal --save``` in your project folder

## Usage
Use this simple modal with [Bulma](https://trello.com/b/BDC3zQvN).
``` js
import { Modal } from '@lassehaslev/vue-modal';
export default {
    template: `
        <a @click="open" class="button is-primary is-large" href="#">Open a simple modal</a>
        <modal ref="modal">
            <!-- Modal content Start -->
            <div class="box has-text-centered">
                <h1 class="title">
                    First modal
                </h1>
            </div>
            <!-- Modal content END -->
        </modal>
    `,
    methods: {
        open() {
            this.$refs.modal.open();
        }
    },
    components: {
        Modal,
    }
}
```

## Extend / Build your own!
Just include the BaseModal class as a mixin, and you are good to call ```open``` and ```close``` and checking ```isShowingModal``` boolean.
```js
import BaseModal from '@lassehaslev/hjh';

export default {
    template: `
    <div v-show="isShowingModal" class="modal is-active">
        <div class="modal-background" @click="close"></div>
        <div class="modal-content">
            <slot></slot>
        </div>
        <button class="modal-close" @click="close"></button>
    </div>
    `,

    mixins: [ BaseModal ],
}
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

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
