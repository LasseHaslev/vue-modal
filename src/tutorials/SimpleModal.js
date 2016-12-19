import { Modal } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/Modal.js">
                            Simple modal
                        </a>
                    </h3>
                    <h4 class="subtitle is-4">Open a simple logic with bulma</h4>
                    <p>If <a href="http://bulma.io/">Bulma.io</a> does not fit your needs, you can create a simular file like this package <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/Modal.js">Modal.js</a>.</p>
                    <p> Make shure you add the <a href="https://github.com/LasseHaslev/vue-modal/blob/master/src/components/BaseModal.js">BaseModal.js</a> as a mixin, and add events for click and close.</p>

        <br>
        
        <h4 class="subtitle">Note:</h4>
        <p>When modal open is called we automaticly call <code>onModalOpen</code> method, and <code>onModalClose</code> gets called when close is called.</p>

        <pre>
    methods: {
        onModalOpen() {
            console.log('Well! This is convinient on open!');
        },
        onModalClose() {
            console.log('Well! This is convinient on close!');
        },
    }
        </pre>

                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Open a simple modal</a>
                    </div>
                    <modal ref="modal">
                        <div class="box has-text-centered">
                            <h4 class="title">This is a simple modal!</h4>
                            <p>You can click on the background to get out, or you can click the X in the top right corner!</p>
                            <p>If you are a true rebel you can also press <code>&#60;esc&#62;</code> key to close this modal.</p>
                        </div>
                    </modal>
                </div>
            </section>
        </div>
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
