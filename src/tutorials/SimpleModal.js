import { Modal } from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Simple modal
                    </h3>
        <h4 class="subtitle is-4">Open a simple logic with bulma</h4>
                </div>
                <div class="code-preview">
                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Open modal</a>
                    </div>
                    <modal ref="modal">
                        <div class="box">
                            <h1 class="title">Hello world</h1>
                        </div>
                    </modal>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="has-text-centered">
                        <a @click="open" class="button is-primary is-large" href="#">Open modal</a>
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
