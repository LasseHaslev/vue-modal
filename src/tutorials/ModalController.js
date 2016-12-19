import { Modal } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/ModalController.js">
                            Modal controller
                        </a>
                    </h3>
                    <h4 class="subtitle is-4">Handles closing of modals in the right order.</h4>
                    <p>When hitting <code>&#60;esc&#62;</code> key, the controller helps closing multiple modals in stack.</p>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Test modal controller</a>
                    </div>
                    <modal ref="modal">
                        <div class="box has-text-centered">
                            <h4 class="title">Goood!</h4>
                            <p>You can press <code>&#60;esc&#62;</code> key to close this single modal.</p>
                            <p>Or you can click button below to open one more modal inside this modal.</p>
                            <br>
        
                            <button class="button is-large is-primary" @click="openSecond">Open another modal</button>
                        </div>
                        <modal ref="modal-two">
                            <div class="box has-text-centered">
                                <h4 class="title">Woow!</h4>
                                <p>You are now in the second layer of the modal stack.</p>
                                <p>Please press <code>&#60;esc&#62;</code> key to close this modal.</p>
                            </div>
                        </modal>
                    </modal>

                    
                </div>
            </section>
        </div>
    `,

    methods: {
        open() {
            this.$refs.modal.open();
        },
        openSecond() {
            this.$refs['modal-two'].open();
        },
    },

    components: {
        Modal,
        'modal-two': Modal,
    }
}
