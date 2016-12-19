export default {

    data() {
        return {
            isShowingModal: false,
            isLoading: false,
        }
    },

    methods: {
        onModalOpen() {
            this.isShowingModal = false;
        },

        open() {
            this.onModalOpen();
            this.isShowingModal = true;
        },
        close() {
            this.isShowingModal = false;
        },
    }
}
