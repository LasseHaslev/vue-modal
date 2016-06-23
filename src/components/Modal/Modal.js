var brfs = require( 'brfs' );
var Template = brfs.readFileSync( './Modal.template.html', 'utf8' );

module.exports = {

    template: Template,


    data: function() {
        return {
            isOpen: false,
        };
    },

    events: {

        /*
         * Respond to OpenModal event
         */
        'OpenModal'() {
            this.open();
        },

        /*
         * Respond to CloseModal event
         */
        'CloseModal'() {
            this.close();
        },

        /*
         * Respond to ToggleModal event
         */
        'ToggleModal'() {
            this.toggle();
        },

    },

    methods: {

        /*
         * Open modal
         */
        open: function() {

            // Trigger before open function
            this.beforeOpen();

            // Set is open property
            this.$set( 'isOpen', true );

            // Disable scroll for body
            document.body.classList.add('modal-open');

            // Send out open event to parents
            this.$dispatch( 'ModalOpen' );

            // Send out open event to children
            this.$broadcast( 'ModalOpen' );

            // Trigger after open function
            this.afterOpen();

        },

        /*
         * Trigger function before open logic
         */
        beforeOpen() {},

        /*
         * Trigger function after open logic
         */
        afterOpen() {},

        /*
         * Close modal
         */
        close: function() {

            // Trigger before close function
            this.beforeClose();

            // Set is open property
            this.$set( 'isOpen', false );

            // Enable scroll for body
            document.body.classList.remove('modal-open');

            // Send out close event to parents
            this.$dispatch( 'ModalClose' );

            // Send out close event to children
            this.$broadcast( 'ModalClose' );

            // Trigger after close function
            this.afterClose();
        },

        /*
         * Trigger function before open logic
         */
        beforeClose() {},

        /*
         * Trigger function after open logic
         */
        afterClose() {},

        /*
         * Toggle open/close of modal
         */
        toggle: function() {
            !this.isOpen ? this.open() : this.close();
        },
    },

}
