module.exports = {

    template: require('./modal.template.html'),

    data: function() {
        return {
            isOpen: false,
        };
    },

    ready() {
        this.open();
    },

    events: {
        'OpenModal'() {
            this.open();
        },
        'CloseModal'() {
            this.close();
        },
        'ToggleModal'() {
            this.toggle();
        },
    },

    methods: {
        open: function() {
            this.isOpen = true;
            // Disable scroll for body
            document.body.classList.add('modal-open');

            this.$dispatch( 'ModalOpen' );
        },
        close: function() {
            this.isOpen = false;
            // Enable scroll for body
            document.body.classList.remove('modal-open');

            this.$dispatch( 'ModalClose' );
        },
        toggle: function() {
            this.isOpen = ! this.isOpen;
            this.isOpen ? this.open() : this.close();
        },
    },

}
