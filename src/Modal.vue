<style lang="sass">
/* Modal width */
$modal-margin-top: 3% !default;
$modal-responsive-width: 90% !default;
$modal-width: 730px !default;

/* Modal style */
$modal-background-color: white !default;
$modal-padding: 16px !default;
$modal-border-radius: 10px !default;

/* Modal backdrop */
$modal-backdrop-color: black !default;
$modal-backdrop-opacity: .725 !default;

/* Modal close button */
$modal-close-diameter: 25px !default;
$modal-close-offset: .8 !default;
$modal-close-background-color: $modal-background-color !default;
$modal-close-content: 'X' !default;

.Modal, .Modal__backdrop, .Modal__scrollable {
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    z-index: 99998;
}
.Modal {
    &__CloseButton {

        transition: all .8s;

        cursor: pointer;

        position: absolute;
        top: -$modal-close-diameter/2 * $modal-close-offset;
        right: -$modal-close-diameter/2 * $modal-close-offset;
        width: $modal-close-diameter;
        height: $modal-close-diameter;

        background-color: $modal-close-background-color;
        border-radius: 50%;
        box-shadow: 0 0 8px #000;

        &:hover {
            box-shadow: 0 3px 12px #000;
            transform: scale( 1.05 );
        }

        &__icon {
            /* Vertical alicn */
            position: relative;
            top: 50%;
            transform: translateY( -50% );
            text-align:center;

            &:before {
                content: $modal-close-content;
            }
        }
    }
    &__content {
        background-color: $modal-background-color;
        border-radius: $modal-border-radius;
        padding: $modal-padding;
    }
    &__scrollable {
        overflow:auto;
    }
    &__backdrop {
        z-index: -1000;
        background-color: $modal-backdrop-color;
        opacity: $modal-backdrop-opacity;
    }
    &__container {
        position:relative;
        width: $modal-responsive-width;
        max-width: $modal-width;
        margin: $modal-margin-top auto;
        // @extend .Card
    }
}
</style>
<template>
<div v-if="isOpen" @click="toggle" transition="fade" class="Modal">
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
