import BaseModal from './BaseModal';
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
