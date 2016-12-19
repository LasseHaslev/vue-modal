import Vue from 'vue';
import ModalController from './ModalController';

// Set global controller
window.ModalController = new Vue(ModalController);

export default {

    data() {
        return {
            isShowingModal: false,
            isLoading: false,
        }
    },

    methods: {
        onModalOpen() {

        },
        onModalClose() {},

        open() {
            this.onModalOpen();
            window.ModalController.add( this );
            this.isShowingModal = true;
        },
        close() {
            this.onModalClose();
            window.ModalController.remove( this );
            this.isShowingModal = false;
        },
    }
}
