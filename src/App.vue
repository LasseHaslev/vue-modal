<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    @lassehaslev/vue-modal
                </h3>
            </div>
        </section>

        <simple-modal></simple-modal>
        <modal-controller></modal-controller>

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
import SimpleModal from './tutorials/SimpleModal';
import ModalController from './tutorials/ModalController';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleModal,
        ModalController,
    }
}
</script>
