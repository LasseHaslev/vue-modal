export default {
    data() {
        return {
            modalStack: [],
        }
    },

    created() {
        window.addEventListener( 'keyup', this.onKeyUp );
    },

    methods: {
        onKeyUp( evt ) {
            if ( evt.keyCode == 27 ) {
                this.closeOneModal();
            }
        },

        closeOneModal() {
            var modal = this.getLastModal();
            if ( modal ) {
                modal.close();
            }
        },
        getLastModal() {
            if ( ! this.modalStack.length ) return null;
            return this.modalStack[ this.modalStack.length -1 ];
        },

        add( modal ) {
            this.modalStack.push( modal );
        },
        remove() {
            this.modalStack.splice( -1, 1 );
        },
    }
}
