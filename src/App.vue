<template>
    <div id="app">
        <div class="section">
            <div class="container is-fluid has-text-centered">
                <a @click="open" class="button is-primary is-large" href="#">Open modal</a>
                <h1 class="title">Modal</h1>
            </div>
            <modal ref="modal">
                <div class="box">
                    <h1 class="title">Hello world</h1>
                </div>
            </modal>
        </div>
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                    <p>Hello world</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from './index';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    methods: {
        open() {
            this.$refs.modal.open();
        }
    },
    components: {
        Modal,
    }
}
</script>
