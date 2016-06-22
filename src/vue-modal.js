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

    methods: {
        open: function() {
            this.isOpen = true;
            // Disable scroll for body
            document.body.classList.add('modal-open');

            this.$dispatch( 'modal::open' );
        },
        close: function() {
            this.isOpen = false;
            // Enable scroll for body
            document.body.classList.remove('modal-open');

            this.$dispatch( 'modal::close' );
        },
        toggleOpen: function() {
            this.isOpen = ! this.isOpen;
            this.isOpen ? this.open() : this.close();
        },
    },

    components: {
        // 'remove-button': require( '../elements/remove-button' ),
    }
}
