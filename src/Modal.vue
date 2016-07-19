<template>
<div v-if="isOpen" @click="toggle" transition="Modal--Fade" class="Modal">
    <div class="Modal__backdrop"></div>
    <div class="Modal__scrollable">

        <div class="Modal__container clearfix" @click.stop>


            <div class="Modal__content Position--relative">
                <div class="Modal__CloseButton" @click.prevent="close()">
                    <div class="Modal__CloseButton__icon">
                    </div>
                </div>
                <div class="Card__content">
                    <slot>
                        <p>One fine body…</p>
                    </slot>
                </div>
            </div>
        </div>

    </div>
</div>
</template>
<script>
module.exports = {

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
</script>
