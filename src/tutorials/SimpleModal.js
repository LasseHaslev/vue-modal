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
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Open a simple modal</a>
                    </div>
                    <modal ref="modal">
                        <div class="box">
                            <h1 class="title">Hello world</h1>
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
