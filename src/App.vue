<template>
    <div id="app">
        <div class="section">
            <div class="container is-fluid has-text-centered">
                <vue-modal ref="modal">
                    <div class="box">
                        <h1 class="title">Hello world</h1>
                    </div>
                </vue-modal>
                <a @click="open" class="button is-primary is-large" href="#">Open modal</a>
            </div>
        </div>
    </div>
</template>

<script>
import VueModal from './components/Modal';
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
        VueModal,
    }
}
</script>
